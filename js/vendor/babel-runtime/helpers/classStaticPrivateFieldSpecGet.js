var classApplyDescriptorGet=require("./classApplyDescriptorGet"),classCheckPrivateStaticAccess=require("./classCheckPrivateStaticAccess"),classCheckPrivateStaticFieldDescriptor=require("./classCheckPrivateStaticFieldDescriptor");function _classStaticPrivateFieldSpecGet(e,c,t){return classCheckPrivateStaticAccess(e,c),classCheckPrivateStaticFieldDescriptor(t,"get"),classApplyDescriptorGet(e,t)}module.exports=_classStaticPrivateFieldSpecGet;