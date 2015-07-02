try {
  angular.module('constants')
}
catch (e) {
  angular.module('constants', []);
}

angular.module('constants')
.constant('PROCESSORS', [
  {
    "readableName": "checkAnchorLinks",
    "dgPackage": "base",
    "codeName": "checkAnchorLinksProcessor",
    "description": "Checks that the generated documents do not have any dangling anchor links.",
    "docType": "js",
    "$package": "base",
    "index": 36
  },
  {
    "readableName": "computeIds",
    "dgPackage": "base",
    "codeName": "computeIdsProcessor",
    "description": "Compute the id property of each doc based on the tags and other meta-data from a set of templates",
    "docType": "js",
    "$package": "base",
    "index": 20
  },
  {
    "readableName": "computePaths",
    "dgPackage": "base",
    "codeName": "computePathsProcessor",
    "description": "Compute the path and outputPath for docs that do not already have them from a set of templates",
    "docType": "js",
    "$package": "base",
    "index": 27
  },
  {
    "readableName": "debugDump",
    "dgPackage": "base",
    "codeName": "debugDumpProcessor",
    "description": "This processor dumps docs that match a filter to a file",
    "docType": "js"
  },
  {
    "readableName": "readFiles",
    "dgPackage": "base",
    "codeName": "readFilesProcessor",
    "description": "Read documents from files and add them to the docs collection",
    "docType": "js",
    "$package": "base",
    "index": 1
  },
  {
    "readableName": "renderDocs",
    "dgPackage": "base",
    "codeName": "renderDocsProcessor",
    "description": "Render the set of documents using the provided `templateEngine`, to `doc.renderedContent`\nusing the `extraData`, `helpers` and the templates found by `templateFinder`.",
    "docType": "js",
    "$package": "base",
    "index": 30
  },
  {
    "readableName": "unescapeComments",
    "dgPackage": "base",
    "codeName": "unescapeCommentsProcessor",
    "description": "Some files (like CSS) use the same comment markers as the jsdoc comments, such as /*.\nTo get around this we HTML encode them in the source.\nThis processor unescapes them back to normal comment markers",
    "docType": "js",
    "$package": "base",
    "index": 32
  },
  {
    "readableName": "writeFiles",
    "dgPackage": "base",
    "codeName": "writeFilesProcessor",
    "description": "Write the value of `doc.renderedContent` to a file a  `doc.outputPath`.",
    "docType": "js",
    "$package": "base",
    "index": 35
  },
  {
    "readableName": "generateExamples",
    "dgPackage": "examples",
    "codeName": "generateExamplesProcessor",
    "description": "Create doc objects of the various things that need to be rendered for an example.\nThis includes the files that will be run in an iframe, the code that will be injected\ninto the HTML pages and the protractor test files.",
    "docType": "js",
    "$package": "examples",
    "index": 16
  },
  {
    "readableName": "parseExamples",
    "dgPackage": "examples",
    "codeName": "parseExamplesProcessor",
    "description": "Search the documentation for examples that need to be extracted",
    "docType": "js",
    "$package": "examples",
    "index": 4
  },
  {
    "readableName": "generateProtractorTests",
    "dgPackage": "examples",
    "codeName": "generateProtractorTestsProcessor",
    "description": "Generate a protractor test files from the e2e tests in the examples",
    "docType": "js",
    "$package": "examples",
    "index": 17
  },
  {
    "readableName": "codeName",
    "dgPackage": "jsdoc",
    "codeName": "codeNameProcessor",
    "description": "Infer the name of the document from name of the following code",
    "docType": "js",
    "$package": "jsdoc",
    "index": 12
  },
  {
    "readableName": "extractTags",
    "dgPackage": "jsdoc",
    "codeName": "extractTagsProcessor",
    "description": "Extract the information from the tags that were parsed",
    "docType": "js",
    "$package": "jsdoc",
    "index": 10
  },
  {
    "readableName": "extractJSDocComments",
    "dgPackage": "jsdoc",
    "codeName": "extractJSDocCommentsProcessor",
    "description": "This processor will create an doc for each jsdoc style comment in each jsFile\ndoc in the docs collection.\n\nIt will optionaly remove those jsFile docs from the collection by setting the\n`removeJsFileDocs` property.\n\nThe doc will initially have the form:\n```\n{\n  fileInfo: { ... },\n  content: 'the content of the comment',\n  startingLine: xxx,\n  endingLine: xxx,\n  codeNode: someASTNode\n  codeAncestors: arrayOfASTNodes\n}\n```",
    "docType": "js",
    "$package": "jsdoc",
    "index": 3
  },
  {
    "readableName": "inlineTag",
    "dgPackage": "jsdoc",
    "codeName": "inlineTagProcessor",
    "description": "Search the docs for inline tags that need to have content injected.\n\nInline tags are defined by a collection of inline tag definitions.  Each definition is an injectable function,\nwhich should create an object containing, as minimum, a `name` property and a `handler` method, but also,\noptionally, `description` and `aliases` properties.\n\n* The `name` should be the canonical tag name that should be handled.\n* The `aliases` should be an array of additional tag names that should be handled.\n* The `handler` should be a method of the form: `function(doc, tagName, tagDescription, docs) { ... }`\nThe\nFor example:\n\n```\nfunction(partialNames) {\n  return {\n    name: 'link',\n    handler: function(doc, tagName, tagDescription, docs) { ... }},\n    description: 'Handle inline link tags',\n    aliases: ['codeLink']\n  };\n}\n```",
    "docType": "js",
    "$package": "jsdoc",
    "index": 33
  },
  {
    "readableName": "parseTags",
    "dgPackage": "jsdoc",
    "codeName": "parseTagsProcessor",
    "description": "Parse the doc for jsdoc style tags",
    "docType": "js",
    "$package": "jsdoc",
    "index": 6
  },
  {
    "readableName": "filterNgDocs",
    "dgPackage": "ngdoc",
    "codeName": "filterNgDocsProcessor",
    "description": "Remove docs that do not contain the ngdoc tag",
    "docType": "js",
    "$package": "ngdoc",
    "index": 8
  },
  {
    "readableName": "generateComponentGroups",
    "dgPackage": "ngdoc",
    "codeName": "generateComponentGroupsProcessor",
    "description": "Generate documents for each group of components (by type) within a module",
    "docType": "js",
    "$package": "ngdoc",
    "index": 24
  },
  {
    "readableName": "memberDocs",
    "dgPackage": "ngdoc",
    "codeName": "memberDocsProcessor",
    "description": "Merge the member docs into their container doc, and remove them from the main docs collection",
    "docType": "js",
    "$package": "ngdoc",
    "index": 22
  },
  {
    "readableName": "moduleDocs",
    "dgPackage": "ngdoc",
    "codeName": "moduleDocsProcessor",
    "description": "Compute the various fields for modules",
    "docType": "js",
    "$package": "ngdoc",
    "index": 23
  },
  {
    "readableName": "providerDocs",
    "dgPackage": "ngdoc",
    "codeName": "providerDocsProcessor",
    "description": "Connect docs for services to docs for their providers",
    "docType": "js",
    "$package": "ngdoc",
    "index": 25
  },
  {
    "name": "reading-files",
    "readableName": "reading-files",
    "dgPackage": "base",
    "placeholder": true,
    "$package": "base",
    "index": 0
  },
  {
    "name": "files-read",
    "readableName": "files-read",
    "dgPackage": "base",
    "placeholder": true,
    "$package": "base",
    "index": 2
  },
  {
    "name": "parsing-tags",
    "readableName": "parsing-tags",
    "dgPackage": "jsdoc",
    "placeholder": true,
    "$package": "jsdoc",
    "index": 5
  },
  {
    "name": "tags-parsed",
    "readableName": "tags-parsed",
    "dgPackage": "jsdoc",
    "placeholder": true,
    "$package": "jsdoc",
    "index": 7
  },
  {
    "name": "extracting-tags",
    "readableName": "extracting-tags",
    "dgPackage": "jsdoc",
    "placeholder": true,
    "$package": "jsdoc",
    "index": 9
  },
  {
    "name": "tags-extracted",
    "readableName": "tags-extracted",
    "dgPackage": "jsdoc",
    "placeholder": true,
    "$package": "jsdoc",
    "index": 11
  },
  {
    "name": "processing-docs",
    "readableName": "processing-docs",
    "dgPackage": "base",
    "placeholder": true,
    "$package": "base",
    "index": 13
  },
  {
    "name": "docs-processed",
    "readableName": "docs-processed",
    "dgPackage": "base",
    "placeholder": true,
    "$package": "base",
    "index": 14
  },
  {
    "name": "adding-extra-docs",
    "readableName": "adding-extra-docs",
    "dgPackage": "base",
    "placeholder": true,
    "$package": "base",
    "index": 15
  },
  {
    "name": "extra-docs-added",
    "readableName": "extra-docs-added",
    "dgPackage": "base",
    "placeholder": true,
    "$package": "base",
    "index": 18
  },
  {
    "name": "computing-ids",
    "readableName": "computing-ids",
    "dgPackage": "base",
    "placeholder": true,
    "$package": "base",
    "index": 19
  },
  {
    "name": "ids-computed",
    "readableName": "ids-computed",
    "dgPackage": "base",
    "placeholder": true,
    "$package": "base",
    "index": 21
  },
  {
    "name": "computing-paths",
    "readableName": "computing-paths",
    "dgPackage": "base",
    "placeholder": true,
    "$package": "base",
    "index": 26
  },
  {
    "name": "paths-computed",
    "readableName": "paths-computed",
    "dgPackage": "base",
    "placeholder": true,
    "$package": "base",
    "index": 28
  },
  {
    "name": "rendering-docs",
    "readableName": "rendering-docs",
    "dgPackage": "base",
    "placeholder": true,
    "$package": "base",
    "index": 29
  },
  {
    "name": "docs-rendered",
    "readableName": "docs-rendered",
    "dgPackage": "base",
    "placeholder": true,
    "$package": "base",
    "index": 31
  },
  {
    "name": "writing-files",
    "readableName": "writing-files",
    "dgPackage": "base",
    "placeholder": true,
    "$package": "base",
    "index": 34
  },
  {
    "name": "files-written",
    "readableName": "files-written",
    "dgPackage": "base",
    "placeholder": true,
    "$package": "base",
    "index": 37
  }
]);