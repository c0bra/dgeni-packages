try {
  angular.module('constants')
}
catch (e) {
  angular.module('constants', []);
}

angular.module('constants')
.constant('PACKAGES', [
  {
    "name": "base",
    "abbr": "BA",
    "dgPackage": "base",
    "codeName": "factory",
    "description": "Defines minimal set of processors to get started with Dgeni",
    "docType": "js"
  },
  {
    "name": "dgeni",
    "abbr": "DG",
    "dgPackage": "dgeni",
    "codeName": "config",
    "description": "Support for documenting Dgeni packages (incomplete)",
    "docType": "js"
  },
  {
    "name": "examples",
    "abbr": "EX",
    "dgPackage": "examples",
    "codeName": "config",
    "description": "Processors to support the runnable examples feature in the AngularJS docs site.",
    "docType": "js"
  },
  {
    "name": "git",
    "abbr": "GI",
    "dgPackage": "git",
    "codeName": "config",
    "description": "Create and export a new Dgeni package called git which provides\nsome git and version information to the `extraData` for the\n`renderDocsProcessor`.",
    "docType": "js"
  },
  {
    "name": "jsdoc",
    "abbr": "JS",
    "dgPackage": "jsdoc",
    "codeName": "config",
    "description": "Tag parsing and extracting for JSDoc-based documentation",
    "docType": "js"
  },
  {
    "name": "ngdoc",
    "abbr": "NG",
    "dgPackage": "ngdoc",
    "codeName": "config",
    "description": "AngularJS specific tag-defs, processors and templates. This loads the jsdoc and nunjucks packages for you.",
    "docType": "js"
  },
  {
    "name": "nunjucks",
    "abbr": "NU",
    "dgPackage": "nunjucks",
    "codeName": "config",
    "description": "Provides a template engine powered by Nunjucks",
    "docType": "js"
  }
]);