! function(require, directRequire) {
	"use strict";
	const template = require("@babel/template").default,
		generate = require("@babel/generator").default,
		hash = require("string-hash-64"),
		{
			transformSync: transformSync
		} = require("@babel/core"),
		traverse = require("@babel/traverse").default,
		parse = require("@babel/parser").parse,
		buildBindFunc = e => template.ast(`\n  var _${e}_ = this.${e}.bind(this);\n`),
		buildWorkletFunc = e => template.ast(`\n  var ${e} = this._${e}_worklet_factory_();\n`),
		globals = new Set(["this", "console", "_setGlobalConsole", "Date", "Array", "ArrayBuffer", "Int8Array", "Int16Array", "Int32Array", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "Float32Array", "Float64Array", "Date", "HermesInternal", "JSON", "Math", "Number", "Object", "String", "Symbol", "undefined", "null", "UIManager", "requestAnimationFrame", "_WORKLET", "arguments", "Boolean", "parseInt", "parseFloat", "Map", "Set", "_log", "_updateProps", "RegExp", "Error", "global", "_measure", "_scrollTo", "_setGestureState", "_getCurrentTime", "_eventTimestamp", "_frameTimestamp", "isNaN", "LayoutAnimationRepository", "_stopObservingProgress", "_startObservingProgress", "setTimeout", "globalThis", "workletUIModule", "__setTaint__"]),
		blacklistedFunctions = new Set(["stopCapturing", "toString", "map", "filter", "forEach", "valueOf", "toPrecision", "toExponential", "constructor", "toFixed", "toLocaleString", "toSource", "charAt", "charCodeAt", "__getTaint__",  "__setTaint__", "__checkTaint__", "concat", "indexOf", "lastIndexOf", "localeCompare", "length", "match", "replace", "search", "slice", "split", "substr", "substring", "toLocaleLowerCase", "toLocaleUpperCase", "toLowerCase", "toUpperCase", "every", "join", "pop", "push", "reduce", "reduceRight", "reverse", "shift", "slice", "some", "sort", "splice", "unshift", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "bind", "apply", "call", "__callAsync", "includes"]),
		possibleOptFunction = new Set(["interpolate"]);
	class ClosureGenerator {
		constructor() {
			this.trie = [{}, !1]
		}
		mergeAns(e, t) {
			const [r, n] = e, [o, i] = t;
			return 0 !== o.length ? [r.concat(o), i] : [r, n]
		}
		findPrefixRec(e) {
			const t = [
				[], null
			];
			if (!e || "MemberExpression" !== e.node.type) return t;
			const r = e.node;
			if ("Identifier" !== r.property.type) return t;
			if (r.computed || "value" === r.property.name || blacklistedFunctions.has(r.property.name)) return t;
			if (e.parent && "AssignmentExpression" === e.parent.type && e.parent.left === e.node) return t;
			const n = [r.property.name],
				o = r,
				i = this.findPrefixRec(e.parentPath);
			return this.mergeAns([n, o], i)
		}
		findPrefix(e, t) {
			const r = [e],
				n = t.node,
				o = this.findPrefixRec(t.parentPath);
			return this.mergeAns([r, n], o)
		}
		addPath(e, t) {
			const [r, n] = this.findPrefix(e, t);
			let o = this.trie,
				i = -1;
			for (const e of r) i++, o[1] || (o[0][e] || (o[0][e] = [{}, !1]), i === r.length - 1 && (o[0][e] = [n, !0]), o = o[0][e])
		}
		generateNodeForBase(e, t, r) {
			const n = r[0][t];
			return n[1] ? n[0] : e.objectExpression(Object.keys(n[0]).map(t => e.objectProperty(e.identifier(t), this.generateNodeForBase(e, t, n), !1, !0)))
		}
		generate(e, t, r) {
			const n = [...r];
			return e.objectExpression(t.map((t, r) => e.objectProperty(e.identifier(t.name), this.generateNodeForBase(e, n[r], this.trie), !1, !0)))
		}
	}

	function buildWorkletString(e, t, r, n) {
		traverse(t, {
			enter(t) {
				e.removeComments(t.node)
			}
		});
		const o = e.functionExpression(e.identifier(n), t.program.body[0].expression.params, function(t, r) {
			return 0 === t.length ? r : e.blockStatement([e.variableDeclaration("const", [e.variableDeclarator(e.objectPattern(t.map(t => e.objectProperty(e.identifier(t.name), e.identifier(t.name), !1, !0))), e.memberExpression(e.identifier("jsThis"), e.identifier("_closure")))]), r])
		}(r, t.program.body[0].expression.body));
		return generate(o, {
			compact: !0
		}).code
	}

	function generateWorkletFactory(e, t) {
		const r = new Map;
		t.traverse({
			CallExpression: {
				enter(t) {
					if (!e.isMemberExpression(t.node.callee)) return;
					const n = [];
					let o = t.node.callee;
					for (; e.isMemberExpression(o);) {
						const e = o.property.name;
						n.unshift(e), o = o.object
					}
					if (!e.isThisExpression(o)) return;
					let i = n[n.length - 1];
					if ("bind" === i) return i = n[n.length - 2], r.set(i, "bind"), void t.replaceWith(e.identifier(`_${i}_`));
					t.get("callee").replaceWith(e.identifier(i)), r.set(i, "worklet")
				}
			}
		});
		const n = [];
		r.forEach((e, t) => {
			const r = "bind" === e ? (o = t, template.ast(`\n  var _${o}_ = this.${o}.bind(this);\n`)) : buildWorkletFunc(t);
			var o;
			n.push(r)
		});
		const o = e.arrowFunctionExpression(t.node.params, t.node.body),
			i = e.identifier("f");
		return e.functionExpression(null, [], e.blockStatement([...n, e.variableDeclaration("var", [e.variableDeclarator(i, o)]), e.returnStatement(i)]))
	}

	function removeWorkletDirective(e) {
		let t;
		const r = parse("\n(" + e.toString() + "\n)");
		return traverse(r, {
			DirectiveLiteral(e) {
				"worklet" === e.node.value && e.parentPath.remove()
			},
			Program: {
				exit(e) {
					t = e.get("body.0.expression").node
				}
			}
		}), t
	}

	function makeWorkletName(e, t) {
		return e.isObjectMethod(t) ? t.node.key.name : e.isFunctionDeclaration(t) || e.isFunctionExpression(t) && e.isIdentifier(t.node.id) ? t.node.id.name : "_f"
	}

	function makeWorklet(e, t, r) {
		const n = makeWorkletName(e, t),
			o = new Map,
			i = new Set,
			s = new ClosureGenerator,
			a = {};
		t.traverse({
			DirectiveLiteral(e) {
				"worklet" === e.node.value && e.getFunctionParent() === t && e.parentPath.remove()
			}
		});
		const l = "\n(" + (e.isObjectMethod(t) ? "function " : "") + t.toString() + "\n)",
			c = transformSync(l, {
				filename: r,
				ast: !0,
				babelrc: !1,
				configFile: !1
			});
		t.parent && t.parent.callee && "createAnimatedStyle" === t.parent.callee.name && (a.optFlags = isPossibleOptimization(c.ast)), traverse(c.ast, {
			ReferencedIdentifier(e) {
				const r = e.node.name;
				if (globals.has(r) || t.node.id && t.node.id.name === r) return;
				const n = e.parent;
				if ("MemberExpression" === n.type && n.property === e.node && !n.computed) return;
				if ("ObjectProperty" === n.type && "ObjectExpression" === e.parentPath.parent.type && e.node !== n.value) return;
				let i = e.scope;
				for (; null != i;) {
					if (null != i.bindings[r]) return;
					i = i.parent
				}
				o.set(r, e.node), s.addPath(r, e)
			},
			AssignmentExpression(t) {
				const r = t.node.left;
				e.isMemberExpression(r) && e.isIdentifier(r.object) && e.isIdentifier(r.property, {
					name: "value"
				}) && i.add(r.object.name)
			}
		});
		const p = Array.from(o.values()),
			u = e.identifier("_f"),
			d = e.cloneNode(t.node);
		let m;
		m = "BlockStatement" === d.body.type ? e.functionExpression(null, d.params, d.body) : d;
		const f = buildWorkletString(e, c.ast, p, n),
			b = hash(f),
			h = t && t.node && t.node.loc && t.node.loc.start;
		if (h) {
			const {
				line: e,
				column: t
			} = h;
			"number" == typeof e && "number" == typeof t && (r = `${r} (${e}:${t})`)
		}
		const g = [e.variableDeclaration("const", [e.variableDeclarator(u, m)]), e.expressionStatement(e.assignmentExpression("=", e.memberExpression(u, e.identifier("_closure"), !1), s.generate(e, p, o.keys()))), e.expressionStatement(e.assignmentExpression("=", e.memberExpression(u, e.identifier("asString"), !1), e.stringLiteral(f))), e.expressionStatement(e.assignmentExpression("=", e.memberExpression(u, e.identifier("__workletHash"), !1), e.numericLiteral(b))), e.expressionStatement(e.assignmentExpression("=", e.memberExpression(u, e.identifier("__location"), !1), e.stringLiteral(r))), e.expressionStatement(e.assignmentExpression("=", e.memberExpression(u, e.identifier("__worklet"), !1), e.booleanLiteral(!0)))];
		g.push(e.returnStatement(u));
		return e.functionExpression(t.id, [], e.blockStatement(g))
	}

	function processWorkletFunction(e, t, r) {
		if (!e.isFunctionParent(t)) return;
		if (t.parentPath.isObjectProperty()) {
			const r = t.parent.key.name,
				n = removeWorkletDirective(t),
				o = generateWorkletFactory(e, t),
				i = `_${r}_worklet_factory_`;
			return void t.parentPath.replaceWithMultiple([e.objectProperty(e.identifier(r), n, !1, !1), e.objectProperty(e.identifier(i), o, !1, !1)])
		}
		const n = makeWorklet(e, t, r),
			o = e.callExpression(n, []),
			i = e.isScopable(t.parent) || e.isExportNamedDeclaration(t.parent);
		t.replaceWith(t.node.id && i ? e.variableDeclaration("const", [e.variableDeclarator(t.node.id, o)]) : o)
	}

	function processIfWorkletNode(e, t, r) {
		t.traverse({
			DirectiveLiteral(n) {
				if ("worklet" === n.node.value && n.getFunctionParent() === t) {
					const n = t.node.body.directives;
					n && n.length > 0 && n.some(t => e.isDirectiveLiteral(t.value) && "worklet" === t.value.value) && processWorkletFunction(e, t, r)
				}
			}
		})
	}
	const FUNCTIONLESS_FLAG = 1,
		STATEMENTLESS_FLAG = 2;

	function isPossibleOptimization(e) {
		let t = !1,
			r = !1;
		traverse(e, {
			CallExpression(e) {
				possibleOptFunction.has(e.node.callee.name) || (t = !0)
			},
			IfStatement() {
				r = !0
			}
		});
		let n = 0;
		return t || (n |= 1), r || (n |= 2), n
	}
	module.exports = function({
		types: e
	}) {
		return {
			pre() {
				null != this.opts && Array.isArray(this.opts.globals) && this.opts.globals.forEach(e => {
					globals.add(e)
				})
			},
			visitor: {
				"FunctionDeclaration|FunctionExpression|ArrowFunctionExpression": {
					exit(t, r) {
						const n = r.file.opts.filename || r.file.opts.sourceFileName;
						processIfWorkletNode(e, t, n)
					}
				}
			}
		}
	}, module.exports.version = "0.0.7";
}(require("licia/lazyImport")(require), require)