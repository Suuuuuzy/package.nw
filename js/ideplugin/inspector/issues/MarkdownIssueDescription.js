import*as Marked from"../marked/marked.js";import*as SDK from"../sdk/sdk.js";import{createMarkdownView}from"./MarkdownView_bridge.js";export function createIssueDescriptionFromMarkdown(e){return createIssueDescriptionFromRawMarkdown(getMarkdownFileContent(e.file),e)}function getMarkdownFileContent(e){const r=self.Runtime.cachedResources[e];if(!r)throw new Error(`Markdown file ${e} not found. Declare it as a resource in the module.json file`);return r}export function createIssueDescriptionFromRawMarkdown(e,r){const n=Marked.Marked.lexer(e),t=findTitleFromMarkdownAst(n);if(!t)throw new Error("Markdown issue descriptions must start with a heading");const o=createMarkdownView();return o.data={tokens:n.slice(1)},{title:t,message:()=>o,issueKind:SDK.Issue.IssueKind.BreakingChange,links:r.links}}function findTitleFromMarkdownAst(e){return 0===e.length||"heading"!==e[0].type||1!==e[0].depth?null:e[0].text}