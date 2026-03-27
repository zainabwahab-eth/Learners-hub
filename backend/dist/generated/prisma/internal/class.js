"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.5.0",
    "engineVersion": "280c870be64f457428992c43c1f6d557fab6e29e",
    "activeProvider": "postgresql",
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Get a free hosted Postgres database in seconds: `npx create-db`\n\ngenerator client {\n  provider     = \"prisma-client\"\n  output       = \"../generated/prisma\"\n  moduleFormat = \"cjs\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel User {\n  id        String   @id @default(uuid())\n  email     String   @unique\n  name      String\n  password  String\n  avatar    String?\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  folders Folder[]\n}\n\nmodel Folder {\n  id          String   @id @default(uuid())\n  title       String\n  description String?\n  isShared    Boolean  @default(false)\n  createdAt   DateTime @default(now())\n  updatedAt   DateTime @updatedAt\n\n  owner   User   @relation(fields: [ownerId], references: [id])\n  ownerId String\n\n  links Link[]\n}\n\nmodel Link {\n  id          String   @id @default(uuid())\n  title       String\n  description String?\n  url         String\n  createdAt   DateTime @default(now())\n\n  folder   Folder @relation(fields: [folderId], references: [id], onDelete: Cascade)\n  folderId String\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"avatar\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"folders\",\"kind\":\"object\",\"type\":\"Folder\",\"relationName\":\"FolderToUser\"}],\"dbName\":null},\"Folder\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"isShared\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"owner\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"FolderToUser\"},{\"name\":\"ownerId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"links\",\"kind\":\"object\",\"type\":\"Link\",\"relationName\":\"FolderToLink\"}],\"dbName\":null},\"Link\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"url\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"folder\",\"kind\":\"object\",\"type\":\"Folder\",\"relationName\":\"FolderToLink\"},{\"name\":\"folderId\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"orderBy\",\"cursor\",\"owner\",\"folder\",\"links\",\"_count\",\"folders\",\"User.findUnique\",\"User.findUniqueOrThrow\",\"User.findFirst\",\"User.findFirstOrThrow\",\"User.findMany\",\"data\",\"User.createOne\",\"User.createMany\",\"User.createManyAndReturn\",\"User.updateOne\",\"User.updateMany\",\"User.updateManyAndReturn\",\"create\",\"update\",\"User.upsertOne\",\"User.deleteOne\",\"User.deleteMany\",\"having\",\"_min\",\"_max\",\"User.groupBy\",\"User.aggregate\",\"Folder.findUnique\",\"Folder.findUniqueOrThrow\",\"Folder.findFirst\",\"Folder.findFirstOrThrow\",\"Folder.findMany\",\"Folder.createOne\",\"Folder.createMany\",\"Folder.createManyAndReturn\",\"Folder.updateOne\",\"Folder.updateMany\",\"Folder.updateManyAndReturn\",\"Folder.upsertOne\",\"Folder.deleteOne\",\"Folder.deleteMany\",\"Folder.groupBy\",\"Folder.aggregate\",\"Link.findUnique\",\"Link.findUniqueOrThrow\",\"Link.findFirst\",\"Link.findFirstOrThrow\",\"Link.findMany\",\"Link.createOne\",\"Link.createMany\",\"Link.createManyAndReturn\",\"Link.updateOne\",\"Link.updateMany\",\"Link.updateManyAndReturn\",\"Link.upsertOne\",\"Link.deleteOne\",\"Link.deleteMany\",\"Link.groupBy\",\"Link.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"title\",\"description\",\"url\",\"createdAt\",\"folderId\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"isShared\",\"updatedAt\",\"ownerId\",\"email\",\"name\",\"password\",\"avatar\",\"every\",\"some\",\"none\",\"is\",\"isNot\",\"connectOrCreate\",\"upsert\",\"createMany\",\"set\",\"disconnect\",\"delete\",\"connect\",\"updateMany\",\"deleteMany\"]"),
    graph: "qQEbMAsHAABlACA-AABhADA_AAAOABBAAABhADBBAQAAAAFFQABkACFTQABkACFVAQAAAAFWAQBiACFXAQBiACFYAQBjACEBAAAAAQAgDAMAAGoAIAUAAGsAID4AAGgAMD8AAAMAEEAAAGgAMEEBAGIAIUIBAGIAIUMBAGMAIUVAAGQAIVIgAGkAIVNAAGQAIVQBAGIAIQMDAACcAQAgBQAAnQEAIEMAAGwAIAwDAABqACAFAABrACA-AABoADA_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-AABQADA_AABNABBAAABQADBBAQBRACFCAQBRACFDAQBSACFEAQBRACFFQABTACFGAQBRACEDAAAABwAgAQAATAAwGQAATQAgAwAAAAcAIAEAAAgAMAIAAAkAIAk-AABQADA_AABNABBAAABQADBBAQBRACFCAQBRACFDAQBSACFEAQBRACFFQABTACFGAQBRACEOBgAAVQAgGgAAWwAgGwAAWwAgRwEAAAABSAEAAAAESQEAAAAESgEAAAABSwEAAAABTAEAAAABTQEAAAABTgEAWgAhTwEAAAABUAEAAAABUQEAAAABDgYAAFgAIBoAAFkAIBsAAFkAIEcBAAAAAUgBAAAABUkBAAAABUoBAAAAAUsBAAAAAUwBAAAAAU0BAAAAAU4BAFcAIU8BAAAAAVABAAAAAVEBAAAAAQsGAABVACAaAABWACAbAABWACBHQAAAAAFIQAAAAARJQAAAAARKQAAAAAFLQAAAAAFMQAAAAAFNQAAAAAFOQABUACELBgAAVQAgGgAAVgAgGwAAVgAgR0AAAAABSEAAAAAESUAAAAAESkAAAAABS0AAAAABTEAAAAABTUAAAAABTkAAVAAhCEcCAAAAAUgCAAAABEkCAAAABEoCAAAAAUsCAAAAAUwCAAAAAU0CAAAAAU4CAFUAIQhHQAAAAAFIQAAAAARJQAAAAARKQAAAAAFLQAAAAAFMQAAAAAFNQAAAAAFOQABWACEOBgAAWAAgGgAAWQAgGwAAWQAgRwEAAAABSAEAAAAFSQEAAAAFSgEAAAABSwEAAAABTAEAAAABTQEAAAABTgEAVwAhTwEAAAABUAEAAAABUQEAAAABCEcCAAAAAUgCAAAABUkCAAAABUoCAAAAAUsCAAAAAUwCAAAAAU0CAAAAAU4CAFgAIQtHAQAAAAFIAQAAAAVJAQAAAAVKAQAAAAFLAQAAAAFMAQAAAAFNAQAAAAFOAQBZACFPAQAAAAFQAQAAAAFRAQAAAAEOBgAAVQAgGgAAWwAgGwAAWwAgRwEAAAABSAEAAAAESQEAAAAESgEAAAABSwEAAAABTAEAAAABTQEAAAABTgEAWgAhTwEAAAABUAEAAAABUQEAAAABC0cBAAAAAUgBAAAABEkBAAAABEoBAAAAAUsBAAAAAUwBAAAAAU0BAAAAAU4BAFsAIU8BAAAAAVABAAAAAVEBAAAAAQo-AABcADA_AAA3ABBAAABcADBBAQBRACFCAQBRACFDAQBSACFFQABTACFSIABdACFTQABTACFUAQBRACEFBgAAVQAgGgAAXwAgGwAAXwAgRyAAAAABTiAAXgAhBQYAAFUAIBoAAF8AIBsAAF8AIEcgAAAAAU4gAF4AIQJHIAAAAAFOIABfACEKPgAAYAAwPwAAIQAQQAAAYAAwQQEAUQAhRUAAUwAhU0AAUwAhVQEAUQAhVgEAUQAhVwEAUQAhWAEAUgAhCwcAAGUAID4AAGEAMD8AAA4AEEAAAGEAMEEBAGIAIUVAAGQAIVNAAGQAIVUBAGIAIVYBAGIAIVcBAGIAIVgBAGMAIQtHAQAAAAFIAQAAAARJAQAAAARKAQAAAAFLAQAAAAFMAQAAAAFNAQAAAAFOAQBbACFPAQAAAAFQAQAAAAFRAQAAAAELRwEAAAABSAEAAAAFSQEAAAAFSgEAAAABSwEAAAABTAEAAAABTQEAAAABTgEAWQAhTwEAAAABUAEAAAABUQEAAAABCEdAAAAAAUhAAAAABElAAAAABEpAAAAAAUtAAAAAAUxAAAAAAU1AAAAAAU5AAFYAIQNZAAADACBaAAADACBbAAADACAKBAAAZwAgPgAAZgAwPwAABwAQQAAAZgAwQQEAYgAhQgEAYgAhQwEAYwAhRAEAYgAhRUAAZAAhRgEAYgAhDgMAAGoAIAUAAGsAID4AAGgAMD8AAAMAEEAAAGgAMEEBAGIAIUIBAGIAIUMBAGMAIUVAAGQAIVIgAGkAIVNAAGQAIVQBAGIAIVwAAAMAIF0AAAMAIAwDAABqACAFAABrACA-AABoADA_AAADABBAAABoADBBAQBiACFCAQBiACFDAQBjACFFQABkACFSIABpACFTQABkACFUAQBiACECRyAAAAABTiAAXwAhDQcAAGUAID4AAGEAMD8AAA4AEEAAAGEAMEEBAGIAIUVAAGQAIVNAAGQAIVUBAGIAIVYBAGIAIVcBAGIAIVgBAGMAIVwAAA4AIF0AAA4AIANZAAAHACBaAAAHACBbAAAHACAAAAAAAWEBAAAAAQFhAQAAAAEBYUAAAAABBRQAAKUBACAVAACoAQAgXgAApgEAIF8AAKcBACBkAAAFACADFAAApQEAIF4AAKYBACBkAAAFACAAAAABYSAAAAABBRQAAJ8BACAVAACjAQAgXgAAoAEAIF8AAKIBACBkAAABACALFAAAewAwFQAAgAEAMF4AAHwAMF8AAH0AMGAAAH4AIGEAAH8AMGIAAH8AMGMAAH8AMGQAAH8AMGUAAIEBADBmAACCAQAwBUEBAAAAAUIBAAAAAUMBAAAAAUQBAAAAAUVAAAAAAQIAAAAJACAUAACGAQAgAwAAAAkAIBQAAIYBACAVAACFAQAgAQ0AAKEBADAKBAAAZwAgPgAAZgAwPwAABwAQQAAAZgAwQQEAAAABQgEAYgAhQwEAYwAhRAEAYgAhRUAAZAAhRgEAYgAhAgAAAAkAIA0AAIUBACACAAAAgwEAIA0AAIQBACAJPgAAggEAMD8AAIMBABBAAACCAQAwQQEAYgAhQgEAYgAhQwEAYwAhRAEAYgAhRUAAZAAhRgEAYgAhCT4AAIIBADA_AACDAQAQQAAAggEAMEEBAGIAIUIBAGIAIUMBAGMAIUQBAGIAIUVAAGQAIUYBAGIAIQVBAQBwACFCAQBwACFDAQBxACFEAQBwACFFQAByACEFQQEAcAAhQgEAcAAhQwEAcQAhRAEAcAAhRUAAcgAhBUEBAAAAAUIBAAAAAUMBAAAAAUQBAAAAAUVAAAAAAQMUAACfAQAgXgAAoAEAIGQAAAEAIAQUAAB7ADBeAAB8ADBgAAB-ACBkAAB_ADAAAAALFAAAjQEAMBUAAJIBADBeAACOAQAwXwAAjwEAMGAAAJABACBhAACRAQAwYgAAkQEAMGMAAJEBADBkAACRAQAwZQAAkwEAMGYAAJQBADAHBQAAiAEAIEEBAAAAAUIBAAAAAUMBAAAAAUVAAAAAAVIgAAAAAVNAAAAAAQIAAAAFACAUAACYAQAgAwAAAAUAIBQAAJgBACAVAACXAQAgAQ0AAJ4BADAMAwAAagAgBQAAawAgPgAAaAAwPwAAAwAQQAAAaAAwQQEAAAABQgEAYgAhQwEAYwAhRUAAZAAhUiAAaQAhU0AAZAAhVAEAYgAhAgAAAAUAIA0AAJcBACACAAAAlQEAIA0AAJYBACAKPgAAlAEAMD8AAJUBABBAAACUAQAwQQEAYgAhQgEAYgAhQwEAYwAhRUAAZAAhUiAAaQAhU0AAZAAhVAEAYgAhCj4AAJQBADA_AACVAQAQQAAAlAEAMEEBAGIAIUIBAGIAIUMBAGMAIUVAAGQAIVIgAGkAIVNAAGQAIVQBAGIAIQZBAQBwACFCAQBwACFDAQBxACFFQAByACFSIAB4ACFTQAByACEHBQAAegAgQQEAcAAhQgEAcAAhQwEAcQAhRUAAcgAhUiAAeAAhU0AAcgAhBwUAAIgBACBBAQAAAAFCAQAAAAFDAQAAAAFFQAAAAAFSIAAAAAFTQAAAAAEEFAAAjQEAMF4AAI4BADBgAACQAQAgZAAAkQEAMAADAwAAnAEAIAUAAJ0BACBDAABsACACBwAAmgEAIFgAAGwAIAAGQQEAAAABQgEAAAABQwEAAAABRUAAAAABUiAAAAABU0AAAAABB0EBAAAAAUVAAAAAAVNAAAAAAVUBAAAAAVYBAAAAAVcBAAAAAVgBAAAAAQIAAAABACAUAACfAQAgBUEBAAAAAUIBAAAAAUMBAAAAAUQBAAAAAUVAAAAAAQMAAAAOACAUAACfAQAgFQAApAEAIAkAAAAOACANAACkAQAgQQEAcAAhRUAAcgAhU0AAcgAhVQEAcAAhVgEAcAAhVwEAcAAhWAEAcQAhB0EBAHAAIUVAAHIAIVNAAHIAIVUBAHAAIVYBAHAAIVcBAHAAIVgBAHEAIQgDAACHAQAgQQEAAAABQgEAAAABQwEAAAABRUAAAAABUiAAAAABU0AAAAABVAEAAAABAgAAAAUAIBQAAKUBACADAAAAAwAgFAAApQEAIBUAAKkBACAKAAAAAwAgAwAAeQAgDQAAqQEAIEEBAHAAIUIBAHAAIUMBAHEAIUVAAHIAIVIgAHgAIVNAAHIAIVQBAHAAIQgDAAB5ACBBAQBwACFCAQBwACFDAQBxACFFQAByACFSIAB4ACFTQAByACFUAQBwACECBgAFBwYCAwMAAQUKAwYABAEEAAIBBQsAAQcMAAAAAAMGAAoaAAsbAAwAAAADBgAKGgALGwAMAQMAAQEDAAEDBgARGgASGwATAAAAAwYAERoAEhsAEwEEAAIBBAACAwYAGBoAGRsAGgAAAAMGABgaABkbABoIAgEJDQEKEAELEQEMEgEOFAEPFgYQFwcRGQESGwYTHAgWHQEXHgEYHwYcIgkdIw0eJAIfJQIgJgIhJwIiKAIjKgIkLAYlLQ4mLwInMQYoMg8pMwIqNAIrNQYsOBAtORQuOgMvOwMwPAMxPQMyPgMzQAM0QgY1QxU2RQM3RwY4SBY5SQM6SgM7SwY8Thc9Txs"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.js"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.js");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map