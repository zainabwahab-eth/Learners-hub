import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BookmarkModel = runtime.Types.Result.DefaultSelection<Prisma.$BookmarkPayload>;
export type AggregateBookmark = {
    _count: BookmarkCountAggregateOutputType | null;
    _min: BookmarkMinAggregateOutputType | null;
    _max: BookmarkMaxAggregateOutputType | null;
};
export type BookmarkMinAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    folderId: string | null;
    ownerId: string | null;
};
export type BookmarkMaxAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    folderId: string | null;
    ownerId: string | null;
};
export type BookmarkCountAggregateOutputType = {
    id: number;
    createdAt: number;
    folderId: number;
    ownerId: number;
    _all: number;
};
export type BookmarkMinAggregateInputType = {
    id?: true;
    createdAt?: true;
    folderId?: true;
    ownerId?: true;
};
export type BookmarkMaxAggregateInputType = {
    id?: true;
    createdAt?: true;
    folderId?: true;
    ownerId?: true;
};
export type BookmarkCountAggregateInputType = {
    id?: true;
    createdAt?: true;
    folderId?: true;
    ownerId?: true;
    _all?: true;
};
export type BookmarkAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookmarkWhereInput;
    orderBy?: Prisma.BookmarkOrderByWithRelationInput | Prisma.BookmarkOrderByWithRelationInput[];
    cursor?: Prisma.BookmarkWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BookmarkCountAggregateInputType;
    _min?: BookmarkMinAggregateInputType;
    _max?: BookmarkMaxAggregateInputType;
};
export type GetBookmarkAggregateType<T extends BookmarkAggregateArgs> = {
    [P in keyof T & keyof AggregateBookmark]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBookmark[P]> : Prisma.GetScalarType<T[P], AggregateBookmark[P]>;
};
export type BookmarkGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookmarkWhereInput;
    orderBy?: Prisma.BookmarkOrderByWithAggregationInput | Prisma.BookmarkOrderByWithAggregationInput[];
    by: Prisma.BookmarkScalarFieldEnum[] | Prisma.BookmarkScalarFieldEnum;
    having?: Prisma.BookmarkScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BookmarkCountAggregateInputType | true;
    _min?: BookmarkMinAggregateInputType;
    _max?: BookmarkMaxAggregateInputType;
};
export type BookmarkGroupByOutputType = {
    id: string;
    createdAt: Date;
    folderId: string;
    ownerId: string;
    _count: BookmarkCountAggregateOutputType | null;
    _min: BookmarkMinAggregateOutputType | null;
    _max: BookmarkMaxAggregateOutputType | null;
};
type GetBookmarkGroupByPayload<T extends BookmarkGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BookmarkGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BookmarkGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BookmarkGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BookmarkGroupByOutputType[P]>;
}>>;
export type BookmarkWhereInput = {
    AND?: Prisma.BookmarkWhereInput | Prisma.BookmarkWhereInput[];
    OR?: Prisma.BookmarkWhereInput[];
    NOT?: Prisma.BookmarkWhereInput | Prisma.BookmarkWhereInput[];
    id?: Prisma.StringFilter<"Bookmark"> | string;
    createdAt?: Prisma.DateTimeFilter<"Bookmark"> | Date | string;
    folderId?: Prisma.StringFilter<"Bookmark"> | string;
    ownerId?: Prisma.StringFilter<"Bookmark"> | string;
    folder?: Prisma.XOR<Prisma.FolderScalarRelationFilter, Prisma.FolderWhereInput>;
    owner?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
};
export type BookmarkOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    folderId?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    folder?: Prisma.FolderOrderByWithRelationInput;
    owner?: Prisma.ProfileOrderByWithRelationInput;
};
export type BookmarkWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    ownerId_folderId?: Prisma.BookmarkOwnerIdFolderIdCompoundUniqueInput;
    AND?: Prisma.BookmarkWhereInput | Prisma.BookmarkWhereInput[];
    OR?: Prisma.BookmarkWhereInput[];
    NOT?: Prisma.BookmarkWhereInput | Prisma.BookmarkWhereInput[];
    createdAt?: Prisma.DateTimeFilter<"Bookmark"> | Date | string;
    folderId?: Prisma.StringFilter<"Bookmark"> | string;
    ownerId?: Prisma.StringFilter<"Bookmark"> | string;
    folder?: Prisma.XOR<Prisma.FolderScalarRelationFilter, Prisma.FolderWhereInput>;
    owner?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
}, "id" | "ownerId_folderId">;
export type BookmarkOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    folderId?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    _count?: Prisma.BookmarkCountOrderByAggregateInput;
    _max?: Prisma.BookmarkMaxOrderByAggregateInput;
    _min?: Prisma.BookmarkMinOrderByAggregateInput;
};
export type BookmarkScalarWhereWithAggregatesInput = {
    AND?: Prisma.BookmarkScalarWhereWithAggregatesInput | Prisma.BookmarkScalarWhereWithAggregatesInput[];
    OR?: Prisma.BookmarkScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BookmarkScalarWhereWithAggregatesInput | Prisma.BookmarkScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Bookmark"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Bookmark"> | Date | string;
    folderId?: Prisma.StringWithAggregatesFilter<"Bookmark"> | string;
    ownerId?: Prisma.StringWithAggregatesFilter<"Bookmark"> | string;
};
export type BookmarkCreateInput = {
    id?: string;
    createdAt?: Date | string;
    folder: Prisma.FolderCreateNestedOneWithoutBookmarksInput;
    owner: Prisma.ProfileCreateNestedOneWithoutBookmarksInput;
};
export type BookmarkUncheckedCreateInput = {
    id?: string;
    createdAt?: Date | string;
    folderId: string;
    ownerId: string;
};
export type BookmarkUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    folder?: Prisma.FolderUpdateOneRequiredWithoutBookmarksNestedInput;
    owner?: Prisma.ProfileUpdateOneRequiredWithoutBookmarksNestedInput;
};
export type BookmarkUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    folderId?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BookmarkCreateManyInput = {
    id?: string;
    createdAt?: Date | string;
    folderId: string;
    ownerId: string;
};
export type BookmarkUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookmarkUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    folderId?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BookmarkListRelationFilter = {
    every?: Prisma.BookmarkWhereInput;
    some?: Prisma.BookmarkWhereInput;
    none?: Prisma.BookmarkWhereInput;
};
export type BookmarkOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BookmarkOwnerIdFolderIdCompoundUniqueInput = {
    ownerId: string;
    folderId: string;
};
export type BookmarkCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    folderId?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
};
export type BookmarkMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    folderId?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
};
export type BookmarkMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    folderId?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
};
export type BookmarkCreateNestedManyWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.BookmarkCreateWithoutOwnerInput, Prisma.BookmarkUncheckedCreateWithoutOwnerInput> | Prisma.BookmarkCreateWithoutOwnerInput[] | Prisma.BookmarkUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.BookmarkCreateOrConnectWithoutOwnerInput | Prisma.BookmarkCreateOrConnectWithoutOwnerInput[];
    createMany?: Prisma.BookmarkCreateManyOwnerInputEnvelope;
    connect?: Prisma.BookmarkWhereUniqueInput | Prisma.BookmarkWhereUniqueInput[];
};
export type BookmarkUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.BookmarkCreateWithoutOwnerInput, Prisma.BookmarkUncheckedCreateWithoutOwnerInput> | Prisma.BookmarkCreateWithoutOwnerInput[] | Prisma.BookmarkUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.BookmarkCreateOrConnectWithoutOwnerInput | Prisma.BookmarkCreateOrConnectWithoutOwnerInput[];
    createMany?: Prisma.BookmarkCreateManyOwnerInputEnvelope;
    connect?: Prisma.BookmarkWhereUniqueInput | Prisma.BookmarkWhereUniqueInput[];
};
export type BookmarkUpdateManyWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.BookmarkCreateWithoutOwnerInput, Prisma.BookmarkUncheckedCreateWithoutOwnerInput> | Prisma.BookmarkCreateWithoutOwnerInput[] | Prisma.BookmarkUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.BookmarkCreateOrConnectWithoutOwnerInput | Prisma.BookmarkCreateOrConnectWithoutOwnerInput[];
    upsert?: Prisma.BookmarkUpsertWithWhereUniqueWithoutOwnerInput | Prisma.BookmarkUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: Prisma.BookmarkCreateManyOwnerInputEnvelope;
    set?: Prisma.BookmarkWhereUniqueInput | Prisma.BookmarkWhereUniqueInput[];
    disconnect?: Prisma.BookmarkWhereUniqueInput | Prisma.BookmarkWhereUniqueInput[];
    delete?: Prisma.BookmarkWhereUniqueInput | Prisma.BookmarkWhereUniqueInput[];
    connect?: Prisma.BookmarkWhereUniqueInput | Prisma.BookmarkWhereUniqueInput[];
    update?: Prisma.BookmarkUpdateWithWhereUniqueWithoutOwnerInput | Prisma.BookmarkUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: Prisma.BookmarkUpdateManyWithWhereWithoutOwnerInput | Prisma.BookmarkUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: Prisma.BookmarkScalarWhereInput | Prisma.BookmarkScalarWhereInput[];
};
export type BookmarkUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.BookmarkCreateWithoutOwnerInput, Prisma.BookmarkUncheckedCreateWithoutOwnerInput> | Prisma.BookmarkCreateWithoutOwnerInput[] | Prisma.BookmarkUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.BookmarkCreateOrConnectWithoutOwnerInput | Prisma.BookmarkCreateOrConnectWithoutOwnerInput[];
    upsert?: Prisma.BookmarkUpsertWithWhereUniqueWithoutOwnerInput | Prisma.BookmarkUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: Prisma.BookmarkCreateManyOwnerInputEnvelope;
    set?: Prisma.BookmarkWhereUniqueInput | Prisma.BookmarkWhereUniqueInput[];
    disconnect?: Prisma.BookmarkWhereUniqueInput | Prisma.BookmarkWhereUniqueInput[];
    delete?: Prisma.BookmarkWhereUniqueInput | Prisma.BookmarkWhereUniqueInput[];
    connect?: Prisma.BookmarkWhereUniqueInput | Prisma.BookmarkWhereUniqueInput[];
    update?: Prisma.BookmarkUpdateWithWhereUniqueWithoutOwnerInput | Prisma.BookmarkUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: Prisma.BookmarkUpdateManyWithWhereWithoutOwnerInput | Prisma.BookmarkUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: Prisma.BookmarkScalarWhereInput | Prisma.BookmarkScalarWhereInput[];
};
export type BookmarkCreateNestedManyWithoutFolderInput = {
    create?: Prisma.XOR<Prisma.BookmarkCreateWithoutFolderInput, Prisma.BookmarkUncheckedCreateWithoutFolderInput> | Prisma.BookmarkCreateWithoutFolderInput[] | Prisma.BookmarkUncheckedCreateWithoutFolderInput[];
    connectOrCreate?: Prisma.BookmarkCreateOrConnectWithoutFolderInput | Prisma.BookmarkCreateOrConnectWithoutFolderInput[];
    createMany?: Prisma.BookmarkCreateManyFolderInputEnvelope;
    connect?: Prisma.BookmarkWhereUniqueInput | Prisma.BookmarkWhereUniqueInput[];
};
export type BookmarkUncheckedCreateNestedManyWithoutFolderInput = {
    create?: Prisma.XOR<Prisma.BookmarkCreateWithoutFolderInput, Prisma.BookmarkUncheckedCreateWithoutFolderInput> | Prisma.BookmarkCreateWithoutFolderInput[] | Prisma.BookmarkUncheckedCreateWithoutFolderInput[];
    connectOrCreate?: Prisma.BookmarkCreateOrConnectWithoutFolderInput | Prisma.BookmarkCreateOrConnectWithoutFolderInput[];
    createMany?: Prisma.BookmarkCreateManyFolderInputEnvelope;
    connect?: Prisma.BookmarkWhereUniqueInput | Prisma.BookmarkWhereUniqueInput[];
};
export type BookmarkUpdateManyWithoutFolderNestedInput = {
    create?: Prisma.XOR<Prisma.BookmarkCreateWithoutFolderInput, Prisma.BookmarkUncheckedCreateWithoutFolderInput> | Prisma.BookmarkCreateWithoutFolderInput[] | Prisma.BookmarkUncheckedCreateWithoutFolderInput[];
    connectOrCreate?: Prisma.BookmarkCreateOrConnectWithoutFolderInput | Prisma.BookmarkCreateOrConnectWithoutFolderInput[];
    upsert?: Prisma.BookmarkUpsertWithWhereUniqueWithoutFolderInput | Prisma.BookmarkUpsertWithWhereUniqueWithoutFolderInput[];
    createMany?: Prisma.BookmarkCreateManyFolderInputEnvelope;
    set?: Prisma.BookmarkWhereUniqueInput | Prisma.BookmarkWhereUniqueInput[];
    disconnect?: Prisma.BookmarkWhereUniqueInput | Prisma.BookmarkWhereUniqueInput[];
    delete?: Prisma.BookmarkWhereUniqueInput | Prisma.BookmarkWhereUniqueInput[];
    connect?: Prisma.BookmarkWhereUniqueInput | Prisma.BookmarkWhereUniqueInput[];
    update?: Prisma.BookmarkUpdateWithWhereUniqueWithoutFolderInput | Prisma.BookmarkUpdateWithWhereUniqueWithoutFolderInput[];
    updateMany?: Prisma.BookmarkUpdateManyWithWhereWithoutFolderInput | Prisma.BookmarkUpdateManyWithWhereWithoutFolderInput[];
    deleteMany?: Prisma.BookmarkScalarWhereInput | Prisma.BookmarkScalarWhereInput[];
};
export type BookmarkUncheckedUpdateManyWithoutFolderNestedInput = {
    create?: Prisma.XOR<Prisma.BookmarkCreateWithoutFolderInput, Prisma.BookmarkUncheckedCreateWithoutFolderInput> | Prisma.BookmarkCreateWithoutFolderInput[] | Prisma.BookmarkUncheckedCreateWithoutFolderInput[];
    connectOrCreate?: Prisma.BookmarkCreateOrConnectWithoutFolderInput | Prisma.BookmarkCreateOrConnectWithoutFolderInput[];
    upsert?: Prisma.BookmarkUpsertWithWhereUniqueWithoutFolderInput | Prisma.BookmarkUpsertWithWhereUniqueWithoutFolderInput[];
    createMany?: Prisma.BookmarkCreateManyFolderInputEnvelope;
    set?: Prisma.BookmarkWhereUniqueInput | Prisma.BookmarkWhereUniqueInput[];
    disconnect?: Prisma.BookmarkWhereUniqueInput | Prisma.BookmarkWhereUniqueInput[];
    delete?: Prisma.BookmarkWhereUniqueInput | Prisma.BookmarkWhereUniqueInput[];
    connect?: Prisma.BookmarkWhereUniqueInput | Prisma.BookmarkWhereUniqueInput[];
    update?: Prisma.BookmarkUpdateWithWhereUniqueWithoutFolderInput | Prisma.BookmarkUpdateWithWhereUniqueWithoutFolderInput[];
    updateMany?: Prisma.BookmarkUpdateManyWithWhereWithoutFolderInput | Prisma.BookmarkUpdateManyWithWhereWithoutFolderInput[];
    deleteMany?: Prisma.BookmarkScalarWhereInput | Prisma.BookmarkScalarWhereInput[];
};
export type BookmarkCreateWithoutOwnerInput = {
    id?: string;
    createdAt?: Date | string;
    folder: Prisma.FolderCreateNestedOneWithoutBookmarksInput;
};
export type BookmarkUncheckedCreateWithoutOwnerInput = {
    id?: string;
    createdAt?: Date | string;
    folderId: string;
};
export type BookmarkCreateOrConnectWithoutOwnerInput = {
    where: Prisma.BookmarkWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookmarkCreateWithoutOwnerInput, Prisma.BookmarkUncheckedCreateWithoutOwnerInput>;
};
export type BookmarkCreateManyOwnerInputEnvelope = {
    data: Prisma.BookmarkCreateManyOwnerInput | Prisma.BookmarkCreateManyOwnerInput[];
    skipDuplicates?: boolean;
};
export type BookmarkUpsertWithWhereUniqueWithoutOwnerInput = {
    where: Prisma.BookmarkWhereUniqueInput;
    update: Prisma.XOR<Prisma.BookmarkUpdateWithoutOwnerInput, Prisma.BookmarkUncheckedUpdateWithoutOwnerInput>;
    create: Prisma.XOR<Prisma.BookmarkCreateWithoutOwnerInput, Prisma.BookmarkUncheckedCreateWithoutOwnerInput>;
};
export type BookmarkUpdateWithWhereUniqueWithoutOwnerInput = {
    where: Prisma.BookmarkWhereUniqueInput;
    data: Prisma.XOR<Prisma.BookmarkUpdateWithoutOwnerInput, Prisma.BookmarkUncheckedUpdateWithoutOwnerInput>;
};
export type BookmarkUpdateManyWithWhereWithoutOwnerInput = {
    where: Prisma.BookmarkScalarWhereInput;
    data: Prisma.XOR<Prisma.BookmarkUpdateManyMutationInput, Prisma.BookmarkUncheckedUpdateManyWithoutOwnerInput>;
};
export type BookmarkScalarWhereInput = {
    AND?: Prisma.BookmarkScalarWhereInput | Prisma.BookmarkScalarWhereInput[];
    OR?: Prisma.BookmarkScalarWhereInput[];
    NOT?: Prisma.BookmarkScalarWhereInput | Prisma.BookmarkScalarWhereInput[];
    id?: Prisma.StringFilter<"Bookmark"> | string;
    createdAt?: Prisma.DateTimeFilter<"Bookmark"> | Date | string;
    folderId?: Prisma.StringFilter<"Bookmark"> | string;
    ownerId?: Prisma.StringFilter<"Bookmark"> | string;
};
export type BookmarkCreateWithoutFolderInput = {
    id?: string;
    createdAt?: Date | string;
    owner: Prisma.ProfileCreateNestedOneWithoutBookmarksInput;
};
export type BookmarkUncheckedCreateWithoutFolderInput = {
    id?: string;
    createdAt?: Date | string;
    ownerId: string;
};
export type BookmarkCreateOrConnectWithoutFolderInput = {
    where: Prisma.BookmarkWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookmarkCreateWithoutFolderInput, Prisma.BookmarkUncheckedCreateWithoutFolderInput>;
};
export type BookmarkCreateManyFolderInputEnvelope = {
    data: Prisma.BookmarkCreateManyFolderInput | Prisma.BookmarkCreateManyFolderInput[];
    skipDuplicates?: boolean;
};
export type BookmarkUpsertWithWhereUniqueWithoutFolderInput = {
    where: Prisma.BookmarkWhereUniqueInput;
    update: Prisma.XOR<Prisma.BookmarkUpdateWithoutFolderInput, Prisma.BookmarkUncheckedUpdateWithoutFolderInput>;
    create: Prisma.XOR<Prisma.BookmarkCreateWithoutFolderInput, Prisma.BookmarkUncheckedCreateWithoutFolderInput>;
};
export type BookmarkUpdateWithWhereUniqueWithoutFolderInput = {
    where: Prisma.BookmarkWhereUniqueInput;
    data: Prisma.XOR<Prisma.BookmarkUpdateWithoutFolderInput, Prisma.BookmarkUncheckedUpdateWithoutFolderInput>;
};
export type BookmarkUpdateManyWithWhereWithoutFolderInput = {
    where: Prisma.BookmarkScalarWhereInput;
    data: Prisma.XOR<Prisma.BookmarkUpdateManyMutationInput, Prisma.BookmarkUncheckedUpdateManyWithoutFolderInput>;
};
export type BookmarkCreateManyOwnerInput = {
    id?: string;
    createdAt?: Date | string;
    folderId: string;
};
export type BookmarkUpdateWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    folder?: Prisma.FolderUpdateOneRequiredWithoutBookmarksNestedInput;
};
export type BookmarkUncheckedUpdateWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    folderId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BookmarkUncheckedUpdateManyWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    folderId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BookmarkCreateManyFolderInput = {
    id?: string;
    createdAt?: Date | string;
    ownerId: string;
};
export type BookmarkUpdateWithoutFolderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.ProfileUpdateOneRequiredWithoutBookmarksNestedInput;
};
export type BookmarkUncheckedUpdateWithoutFolderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BookmarkUncheckedUpdateManyWithoutFolderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BookmarkSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    folderId?: boolean;
    ownerId?: boolean;
    folder?: boolean | Prisma.FolderDefaultArgs<ExtArgs>;
    owner?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bookmark"]>;
export type BookmarkSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    folderId?: boolean;
    ownerId?: boolean;
    folder?: boolean | Prisma.FolderDefaultArgs<ExtArgs>;
    owner?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bookmark"]>;
export type BookmarkSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    folderId?: boolean;
    ownerId?: boolean;
    folder?: boolean | Prisma.FolderDefaultArgs<ExtArgs>;
    owner?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bookmark"]>;
export type BookmarkSelectScalar = {
    id?: boolean;
    createdAt?: boolean;
    folderId?: boolean;
    ownerId?: boolean;
};
export type BookmarkOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "createdAt" | "folderId" | "ownerId", ExtArgs["result"]["bookmark"]>;
export type BookmarkInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    folder?: boolean | Prisma.FolderDefaultArgs<ExtArgs>;
    owner?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type BookmarkIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    folder?: boolean | Prisma.FolderDefaultArgs<ExtArgs>;
    owner?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type BookmarkIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    folder?: boolean | Prisma.FolderDefaultArgs<ExtArgs>;
    owner?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type $BookmarkPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Bookmark";
    objects: {
        folder: Prisma.$FolderPayload<ExtArgs>;
        owner: Prisma.$ProfilePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        createdAt: Date;
        folderId: string;
        ownerId: string;
    }, ExtArgs["result"]["bookmark"]>;
    composites: {};
};
export type BookmarkGetPayload<S extends boolean | null | undefined | BookmarkDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BookmarkPayload, S>;
export type BookmarkCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BookmarkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BookmarkCountAggregateInputType | true;
};
export interface BookmarkDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Bookmark'];
        meta: {
            name: 'Bookmark';
        };
    };
    findUnique<T extends BookmarkFindUniqueArgs>(args: Prisma.SelectSubset<T, BookmarkFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BookmarkClient<runtime.Types.Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BookmarkFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BookmarkFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BookmarkClient<runtime.Types.Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BookmarkFindFirstArgs>(args?: Prisma.SelectSubset<T, BookmarkFindFirstArgs<ExtArgs>>): Prisma.Prisma__BookmarkClient<runtime.Types.Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BookmarkFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BookmarkFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BookmarkClient<runtime.Types.Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BookmarkFindManyArgs>(args?: Prisma.SelectSubset<T, BookmarkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BookmarkCreateArgs>(args: Prisma.SelectSubset<T, BookmarkCreateArgs<ExtArgs>>): Prisma.Prisma__BookmarkClient<runtime.Types.Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BookmarkCreateManyArgs>(args?: Prisma.SelectSubset<T, BookmarkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BookmarkCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BookmarkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BookmarkDeleteArgs>(args: Prisma.SelectSubset<T, BookmarkDeleteArgs<ExtArgs>>): Prisma.Prisma__BookmarkClient<runtime.Types.Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BookmarkUpdateArgs>(args: Prisma.SelectSubset<T, BookmarkUpdateArgs<ExtArgs>>): Prisma.Prisma__BookmarkClient<runtime.Types.Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BookmarkDeleteManyArgs>(args?: Prisma.SelectSubset<T, BookmarkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BookmarkUpdateManyArgs>(args: Prisma.SelectSubset<T, BookmarkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BookmarkUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BookmarkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BookmarkUpsertArgs>(args: Prisma.SelectSubset<T, BookmarkUpsertArgs<ExtArgs>>): Prisma.Prisma__BookmarkClient<runtime.Types.Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BookmarkCountArgs>(args?: Prisma.Subset<T, BookmarkCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BookmarkCountAggregateOutputType> : number>;
    aggregate<T extends BookmarkAggregateArgs>(args: Prisma.Subset<T, BookmarkAggregateArgs>): Prisma.PrismaPromise<GetBookmarkAggregateType<T>>;
    groupBy<T extends BookmarkGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BookmarkGroupByArgs['orderBy'];
    } : {
        orderBy?: BookmarkGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BookmarkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookmarkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BookmarkFieldRefs;
}
export interface Prisma__BookmarkClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    folder<T extends Prisma.FolderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FolderDefaultArgs<ExtArgs>>): Prisma.Prisma__FolderClient<runtime.Types.Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    owner<T extends Prisma.ProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BookmarkFieldRefs {
    readonly id: Prisma.FieldRef<"Bookmark", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Bookmark", 'DateTime'>;
    readonly folderId: Prisma.FieldRef<"Bookmark", 'String'>;
    readonly ownerId: Prisma.FieldRef<"Bookmark", 'String'>;
}
export type BookmarkFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookmarkSelect<ExtArgs> | null;
    omit?: Prisma.BookmarkOmit<ExtArgs> | null;
    include?: Prisma.BookmarkInclude<ExtArgs> | null;
    where: Prisma.BookmarkWhereUniqueInput;
};
export type BookmarkFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookmarkSelect<ExtArgs> | null;
    omit?: Prisma.BookmarkOmit<ExtArgs> | null;
    include?: Prisma.BookmarkInclude<ExtArgs> | null;
    where: Prisma.BookmarkWhereUniqueInput;
};
export type BookmarkFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookmarkSelect<ExtArgs> | null;
    omit?: Prisma.BookmarkOmit<ExtArgs> | null;
    include?: Prisma.BookmarkInclude<ExtArgs> | null;
    where?: Prisma.BookmarkWhereInput;
    orderBy?: Prisma.BookmarkOrderByWithRelationInput | Prisma.BookmarkOrderByWithRelationInput[];
    cursor?: Prisma.BookmarkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookmarkScalarFieldEnum | Prisma.BookmarkScalarFieldEnum[];
};
export type BookmarkFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookmarkSelect<ExtArgs> | null;
    omit?: Prisma.BookmarkOmit<ExtArgs> | null;
    include?: Prisma.BookmarkInclude<ExtArgs> | null;
    where?: Prisma.BookmarkWhereInput;
    orderBy?: Prisma.BookmarkOrderByWithRelationInput | Prisma.BookmarkOrderByWithRelationInput[];
    cursor?: Prisma.BookmarkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookmarkScalarFieldEnum | Prisma.BookmarkScalarFieldEnum[];
};
export type BookmarkFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookmarkSelect<ExtArgs> | null;
    omit?: Prisma.BookmarkOmit<ExtArgs> | null;
    include?: Prisma.BookmarkInclude<ExtArgs> | null;
    where?: Prisma.BookmarkWhereInput;
    orderBy?: Prisma.BookmarkOrderByWithRelationInput | Prisma.BookmarkOrderByWithRelationInput[];
    cursor?: Prisma.BookmarkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookmarkScalarFieldEnum | Prisma.BookmarkScalarFieldEnum[];
};
export type BookmarkCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookmarkSelect<ExtArgs> | null;
    omit?: Prisma.BookmarkOmit<ExtArgs> | null;
    include?: Prisma.BookmarkInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BookmarkCreateInput, Prisma.BookmarkUncheckedCreateInput>;
};
export type BookmarkCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BookmarkCreateManyInput | Prisma.BookmarkCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BookmarkCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookmarkSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BookmarkOmit<ExtArgs> | null;
    data: Prisma.BookmarkCreateManyInput | Prisma.BookmarkCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BookmarkIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BookmarkUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookmarkSelect<ExtArgs> | null;
    omit?: Prisma.BookmarkOmit<ExtArgs> | null;
    include?: Prisma.BookmarkInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BookmarkUpdateInput, Prisma.BookmarkUncheckedUpdateInput>;
    where: Prisma.BookmarkWhereUniqueInput;
};
export type BookmarkUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BookmarkUpdateManyMutationInput, Prisma.BookmarkUncheckedUpdateManyInput>;
    where?: Prisma.BookmarkWhereInput;
    limit?: number;
};
export type BookmarkUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookmarkSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BookmarkOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BookmarkUpdateManyMutationInput, Prisma.BookmarkUncheckedUpdateManyInput>;
    where?: Prisma.BookmarkWhereInput;
    limit?: number;
    include?: Prisma.BookmarkIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BookmarkUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookmarkSelect<ExtArgs> | null;
    omit?: Prisma.BookmarkOmit<ExtArgs> | null;
    include?: Prisma.BookmarkInclude<ExtArgs> | null;
    where: Prisma.BookmarkWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookmarkCreateInput, Prisma.BookmarkUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BookmarkUpdateInput, Prisma.BookmarkUncheckedUpdateInput>;
};
export type BookmarkDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookmarkSelect<ExtArgs> | null;
    omit?: Prisma.BookmarkOmit<ExtArgs> | null;
    include?: Prisma.BookmarkInclude<ExtArgs> | null;
    where: Prisma.BookmarkWhereUniqueInput;
};
export type BookmarkDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookmarkWhereInput;
    limit?: number;
};
export type BookmarkDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookmarkSelect<ExtArgs> | null;
    omit?: Prisma.BookmarkOmit<ExtArgs> | null;
    include?: Prisma.BookmarkInclude<ExtArgs> | null;
};
export {};
