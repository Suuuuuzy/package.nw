import*as IssuesManager from"./IssuesManager.js";import*as LogManager from"./LogManager.js";import*as RelatedIssue from"./RelatedIssue.js";export const logManager=new LogManager.LogManager;IssuesManager.IssuesManager.instance();export{LogManager,IssuesManager,RelatedIssue};