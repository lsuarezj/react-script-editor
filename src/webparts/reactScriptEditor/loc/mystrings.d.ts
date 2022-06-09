declare interface IReactScriptEditorWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
}

declare module 'ReactScriptEditorWebPartStrings' {
  const strings: IReactScriptEditorWebPartStrings;
  export = strings;
}
