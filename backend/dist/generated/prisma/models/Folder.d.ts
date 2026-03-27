import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FolderModel = runtime.Types.Result.DefaultSelection<Prisma.$FolderPayload>;
export type AggregateFolder = {
    _count: FolderCountAggregateOutputType | null;
    _min: FolderMinAggregateOutputType | null;
    _max: FolderMaxAggregateOutputType | null;
};
export type FolderMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    isShared: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    ownerId: string | null;
};
export type FolderMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    isShared: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    ownerId: string | null;
};
export type FolderCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    isShared: number;
    createdAt: number;
    updatedAt: number;
    ownerId: number;
    _all: number;
};
export type FolderMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    isShared?: true;
    createdAt?: true;
    updatedAt?: true;
    ownerId?: true;
};
export type FolderMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    isShared?: true;
    createdAt?: true;
    updatedAt?: true;
    ownerId?: true;
};
export type FolderCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    isShared?: true;
    createdAt?: true;
    updatedAt?: true;
    ownerId?: true;
    _all?: true;
};
export type FolderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FolderWhereInput;
    orderBy?: Prisma.FolderOrderByWithRelationInput | Prisma.FolderOrderByWithRelationInput[];
    cursor?: Prisma.FolderWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FolderCountAggregateInputType;
    _min?: FolderMinAggregateInputType;
    _max?: FolderMaxAggregateInputType;
};
export type GetFolderAggregateType<T extends FolderAggregateArgs> = {
    [P in keyof T & keyof AggregateFolder]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFolder[P]> : Prisma.GetScalarType<T[P], AggregateFolder[P]>;
};
export type FolderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FolderWhereInput;
    orderBy?: Prisma.FolderOrderByWithAggregationInput | Prisma.FolderOrderByWithAggregationInput[];
    by: Prisma.FolderScalarFieldEnum[] | Prisma.FolderScalarFieldEnum;
    having?: Prisma.FolderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FolderCountAggregateInputType | true;
    _min?: FolderMinAggregateInputType;
    _max?: FolderMaxAggregateInputType;
};
export type FolderGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    isShared: boolean;
    createdAt: Date;
    updatedAt: Date;
    ownerId: string;
    _count: FolderCountAggregateOutputType | null;
    _min: FolderMinAggregateOutputType | null;
    _max: FolderMaxAggregateOutputType | null;
};
type GetFolderGroupByPayload<T extends FolderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FolderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FolderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FolderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FolderGroupByOutputType[P]>;
}>>;
export type FolderWhereInput = {
    AND?: Prisma.FolderWhereInput | Prisma.FolderWhereInput[];
    OR?: Prisma.FolderWhereInput[];
    NOT?: Prisma.FolderWhereInput | Prisma.FolderWhereInput[];
    id?: Prisma.StringFilter<"Folder"> | string;
    title?: Prisma.StringFilter<"Folder"> | string;
    description?: Prisma.StringNullableFilter<"Folder"> | string | null;
    isShared?: Prisma.BoolFilter<"Folder"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Folder"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Folder"> | Date | string;
    ownerId?: Prisma.StringFilter<"Folder"> | string;
    owner?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    links?: Prisma.LinkListRelationFilter;
};
export type FolderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    isShared?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    owner?: Prisma.UserOrderByWithRelationInput;
    links?: Prisma.LinkOrderByRelationAggregateInput;
};
export type FolderWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.FolderWhereInput | Prisma.FolderWhereInput[];
    OR?: Prisma.FolderWhereInput[];
    NOT?: Prisma.FolderWhereInput | Prisma.FolderWhereInput[];
    title?: Prisma.StringFilter<"Folder"> | string;
    description?: Prisma.StringNullableFilter<"Folder"> | string | null;
    isShared?: Prisma.BoolFilter<"Folder"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Folder"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Folder"> | Date | string;
    ownerId?: Prisma.StringFilter<"Folder"> | string;
    owner?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    links?: Prisma.LinkListRelationFilter;
}, "id">;
export type FolderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    isShared?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    _count?: Prisma.FolderCountOrderByAggregateInput;
    _max?: Prisma.FolderMaxOrderByAggregateInput;
    _min?: Prisma.FolderMinOrderByAggregateInput;
};
export type FolderScalarWhereWithAggregatesInput = {
    AND?: Prisma.FolderScalarWhereWithAggregatesInput | Prisma.FolderScalarWhereWithAggregatesInput[];
    OR?: Prisma.FolderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FolderScalarWhereWithAggregatesInput | Prisma.FolderScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Folder"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Folder"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Folder"> | string | null;
    isShared?: Prisma.BoolWithAggregatesFilter<"Folder"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Folder"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Folder"> | Date | string;
    ownerId?: Prisma.StringWithAggregatesFilter<"Folder"> | string;
};
export type FolderCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    isShared?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: Prisma.UserCreateNestedOneWithoutFoldersInput;
    links?: Prisma.LinkCreateNestedManyWithoutFolderInput;
};
export type FolderUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    isShared?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ownerId: string;
    links?: Prisma.LinkUncheckedCreateNestedManyWithoutFolderInput;
};
export type FolderUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isShared?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.UserUpdateOneRequiredWithoutFoldersNestedInput;
    links?: Prisma.LinkUpdateManyWithoutFolderNestedInput;
};
export type FolderUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isShared?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    links?: Prisma.LinkUncheckedUpdateManyWithoutFolderNestedInput;
};
export type FolderCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    isShared?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ownerId: string;
};
export type FolderUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isShared?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FolderUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isShared?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type FolderListRelationFilter = {
    every?: Prisma.FolderWhereInput;
    some?: Prisma.FolderWhereInput;
    none?: Prisma.FolderWhereInput;
};
export type FolderOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FolderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isShared?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
};
export type FolderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isShared?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
};
export type FolderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isShared?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
};
export type FolderScalarRelationFilter = {
    is?: Prisma.FolderWhereInput;
    isNot?: Prisma.FolderWhereInput;
};
export type FolderCreateNestedManyWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.FolderCreateWithoutOwnerInput, Prisma.FolderUncheckedCreateWithoutOwnerInput> | Prisma.FolderCreateWithoutOwnerInput[] | Prisma.FolderUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.FolderCreateOrConnectWithoutOwnerInput | Prisma.FolderCreateOrConnectWithoutOwnerInput[];
    createMany?: Prisma.FolderCreateManyOwnerInputEnvelope;
    connect?: Prisma.FolderWhereUniqueInput | Prisma.FolderWhereUniqueInput[];
};
export type FolderUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.FolderCreateWithoutOwnerInput, Prisma.FolderUncheckedCreateWithoutOwnerInput> | Prisma.FolderCreateWithoutOwnerInput[] | Prisma.FolderUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.FolderCreateOrConnectWithoutOwnerInput | Prisma.FolderCreateOrConnectWithoutOwnerInput[];
    createMany?: Prisma.FolderCreateManyOwnerInputEnvelope;
    connect?: Prisma.FolderWhereUniqueInput | Prisma.FolderWhereUniqueInput[];
};
export type FolderUpdateManyWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.FolderCreateWithoutOwnerInput, Prisma.FolderUncheckedCreateWithoutOwnerInput> | Prisma.FolderCreateWithoutOwnerInput[] | Prisma.FolderUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.FolderCreateOrConnectWithoutOwnerInput | Prisma.FolderCreateOrConnectWithoutOwnerInput[];
    upsert?: Prisma.FolderUpsertWithWhereUniqueWithoutOwnerInput | Prisma.FolderUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: Prisma.FolderCreateManyOwnerInputEnvelope;
    set?: Prisma.FolderWhereUniqueInput | Prisma.FolderWhereUniqueInput[];
    disconnect?: Prisma.FolderWhereUniqueInput | Prisma.FolderWhereUniqueInput[];
    delete?: Prisma.FolderWhereUniqueInput | Prisma.FolderWhereUniqueInput[];
    connect?: Prisma.FolderWhereUniqueInput | Prisma.FolderWhereUniqueInput[];
    update?: Prisma.FolderUpdateWithWhereUniqueWithoutOwnerInput | Prisma.FolderUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: Prisma.FolderUpdateManyWithWhereWithoutOwnerInput | Prisma.FolderUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: Prisma.FolderScalarWhereInput | Prisma.FolderScalarWhereInput[];
};
export type FolderUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.FolderCreateWithoutOwnerInput, Prisma.FolderUncheckedCreateWithoutOwnerInput> | Prisma.FolderCreateWithoutOwnerInput[] | Prisma.FolderUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.FolderCreateOrConnectWithoutOwnerInput | Prisma.FolderCreateOrConnectWithoutOwnerInput[];
    upsert?: Prisma.FolderUpsertWithWhereUniqueWithoutOwnerInput | Prisma.FolderUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: Prisma.FolderCreateManyOwnerInputEnvelope;
    set?: Prisma.FolderWhereUniqueInput | Prisma.FolderWhereUniqueInput[];
    disconnect?: Prisma.FolderWhereUniqueInput | Prisma.FolderWhereUniqueInput[];
    delete?: Prisma.FolderWhereUniqueInput | Prisma.FolderWhereUniqueInput[];
    connect?: Prisma.FolderWhereUniqueInput | Prisma.FolderWhereUniqueInput[];
    update?: Prisma.FolderUpdateWithWhereUniqueWithoutOwnerInput | Prisma.FolderUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: Prisma.FolderUpdateManyWithWhereWithoutOwnerInput | Prisma.FolderUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: Prisma.FolderScalarWhereInput | Prisma.FolderScalarWhereInput[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type FolderCreateNestedOneWithoutLinksInput = {
    create?: Prisma.XOR<Prisma.FolderCreateWithoutLinksInput, Prisma.FolderUncheckedCreateWithoutLinksInput>;
    connectOrCreate?: Prisma.FolderCreateOrConnectWithoutLinksInput;
    connect?: Prisma.FolderWhereUniqueInput;
};
export type FolderUpdateOneRequiredWithoutLinksNestedInput = {
    create?: Prisma.XOR<Prisma.FolderCreateWithoutLinksInput, Prisma.FolderUncheckedCreateWithoutLinksInput>;
    connectOrCreate?: Prisma.FolderCreateOrConnectWithoutLinksInput;
    upsert?: Prisma.FolderUpsertWithoutLinksInput;
    connect?: Prisma.FolderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FolderUpdateToOneWithWhereWithoutLinksInput, Prisma.FolderUpdateWithoutLinksInput>, Prisma.FolderUncheckedUpdateWithoutLinksInput>;
};
export type FolderCreateWithoutOwnerInput = {
    id?: string;
    title: string;
    description?: string | null;
    isShared?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    links?: Prisma.LinkCreateNestedManyWithoutFolderInput;
};
export type FolderUncheckedCreateWithoutOwnerInput = {
    id?: string;
    title: string;
    description?: string | null;
    isShared?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    links?: Prisma.LinkUncheckedCreateNestedManyWithoutFolderInput;
};
export type FolderCreateOrConnectWithoutOwnerInput = {
    where: Prisma.FolderWhereUniqueInput;
    create: Prisma.XOR<Prisma.FolderCreateWithoutOwnerInput, Prisma.FolderUncheckedCreateWithoutOwnerInput>;
};
export type FolderCreateManyOwnerInputEnvelope = {
    data: Prisma.FolderCreateManyOwnerInput | Prisma.FolderCreateManyOwnerInput[];
    skipDuplicates?: boolean;
};
export type FolderUpsertWithWhereUniqueWithoutOwnerInput = {
    where: Prisma.FolderWhereUniqueInput;
    update: Prisma.XOR<Prisma.FolderUpdateWithoutOwnerInput, Prisma.FolderUncheckedUpdateWithoutOwnerInput>;
    create: Prisma.XOR<Prisma.FolderCreateWithoutOwnerInput, Prisma.FolderUncheckedCreateWithoutOwnerInput>;
};
export type FolderUpdateWithWhereUniqueWithoutOwnerInput = {
    where: Prisma.FolderWhereUniqueInput;
    data: Prisma.XOR<Prisma.FolderUpdateWithoutOwnerInput, Prisma.FolderUncheckedUpdateWithoutOwnerInput>;
};
export type FolderUpdateManyWithWhereWithoutOwnerInput = {
    where: Prisma.FolderScalarWhereInput;
    data: Prisma.XOR<Prisma.FolderUpdateManyMutationInput, Prisma.FolderUncheckedUpdateManyWithoutOwnerInput>;
};
export type FolderScalarWhereInput = {
    AND?: Prisma.FolderScalarWhereInput | Prisma.FolderScalarWhereInput[];
    OR?: Prisma.FolderScalarWhereInput[];
    NOT?: Prisma.FolderScalarWhereInput | Prisma.FolderScalarWhereInput[];
    id?: Prisma.StringFilter<"Folder"> | string;
    title?: Prisma.StringFilter<"Folder"> | string;
    description?: Prisma.StringNullableFilter<"Folder"> | string | null;
    isShared?: Prisma.BoolFilter<"Folder"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Folder"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Folder"> | Date | string;
    ownerId?: Prisma.StringFilter<"Folder"> | string;
};
export type FolderCreateWithoutLinksInput = {
    id?: string;
    title: string;
    description?: string | null;
    isShared?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: Prisma.UserCreateNestedOneWithoutFoldersInput;
};
export type FolderUncheckedCreateWithoutLinksInput = {
    id?: string;
    title: string;
    description?: string | null;
    isShared?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ownerId: string;
};
export type FolderCreateOrConnectWithoutLinksInput = {
    where: Prisma.FolderWhereUniqueInput;
    create: Prisma.XOR<Prisma.FolderCreateWithoutLinksInput, Prisma.FolderUncheckedCreateWithoutLinksInput>;
};
export type FolderUpsertWithoutLinksInput = {
    update: Prisma.XOR<Prisma.FolderUpdateWithoutLinksInput, Prisma.FolderUncheckedUpdateWithoutLinksInput>;
    create: Prisma.XOR<Prisma.FolderCreateWithoutLinksInput, Prisma.FolderUncheckedCreateWithoutLinksInput>;
    where?: Prisma.FolderWhereInput;
};
export type FolderUpdateToOneWithWhereWithoutLinksInput = {
    where?: Prisma.FolderWhereInput;
    data: Prisma.XOR<Prisma.FolderUpdateWithoutLinksInput, Prisma.FolderUncheckedUpdateWithoutLinksInput>;
};
export type FolderUpdateWithoutLinksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isShared?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.UserUpdateOneRequiredWithoutFoldersNestedInput;
};
export type FolderUncheckedUpdateWithoutLinksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isShared?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type FolderCreateManyOwnerInput = {
    id?: string;
    title: string;
    description?: string | null;
    isShared?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FolderUpdateWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isShared?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    links?: Prisma.LinkUpdateManyWithoutFolderNestedInput;
};
export type FolderUncheckedUpdateWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isShared?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    links?: Prisma.LinkUncheckedUpdateManyWithoutFolderNestedInput;
};
export type FolderUncheckedUpdateManyWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isShared?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FolderCountOutputType = {
    links: number;
};
export type FolderCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    links?: boolean | FolderCountOutputTypeCountLinksArgs;
};
export type FolderCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FolderCountOutputTypeSelect<ExtArgs> | null;
};
export type FolderCountOutputTypeCountLinksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LinkWhereInput;
};
export type FolderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    isShared?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    ownerId?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    links?: boolean | Prisma.Folder$linksArgs<ExtArgs>;
    _count?: boolean | Prisma.FolderCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["folder"]>;
export type FolderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    isShared?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    ownerId?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["folder"]>;
export type FolderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    isShared?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    ownerId?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["folder"]>;
export type FolderSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    isShared?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    ownerId?: boolean;
};
export type FolderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "isShared" | "createdAt" | "updatedAt" | "ownerId", ExtArgs["result"]["folder"]>;
export type FolderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    links?: boolean | Prisma.Folder$linksArgs<ExtArgs>;
    _count?: boolean | Prisma.FolderCountOutputTypeDefaultArgs<ExtArgs>;
};
export type FolderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type FolderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $FolderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Folder";
    objects: {
        owner: Prisma.$UserPayload<ExtArgs>;
        links: Prisma.$LinkPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        description: string | null;
        isShared: boolean;
        createdAt: Date;
        updatedAt: Date;
        ownerId: string;
    }, ExtArgs["result"]["folder"]>;
    composites: {};
};
export type FolderGetPayload<S extends boolean | null | undefined | FolderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FolderPayload, S>;
export type FolderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FolderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FolderCountAggregateInputType | true;
};
export interface FolderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Folder'];
        meta: {
            name: 'Folder';
        };
    };
    findUnique<T extends FolderFindUniqueArgs>(args: Prisma.SelectSubset<T, FolderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FolderClient<runtime.Types.Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FolderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FolderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FolderClient<runtime.Types.Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FolderFindFirstArgs>(args?: Prisma.SelectSubset<T, FolderFindFirstArgs<ExtArgs>>): Prisma.Prisma__FolderClient<runtime.Types.Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FolderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FolderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FolderClient<runtime.Types.Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FolderFindManyArgs>(args?: Prisma.SelectSubset<T, FolderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FolderCreateArgs>(args: Prisma.SelectSubset<T, FolderCreateArgs<ExtArgs>>): Prisma.Prisma__FolderClient<runtime.Types.Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FolderCreateManyArgs>(args?: Prisma.SelectSubset<T, FolderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FolderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FolderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FolderDeleteArgs>(args: Prisma.SelectSubset<T, FolderDeleteArgs<ExtArgs>>): Prisma.Prisma__FolderClient<runtime.Types.Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FolderUpdateArgs>(args: Prisma.SelectSubset<T, FolderUpdateArgs<ExtArgs>>): Prisma.Prisma__FolderClient<runtime.Types.Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FolderDeleteManyArgs>(args?: Prisma.SelectSubset<T, FolderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FolderUpdateManyArgs>(args: Prisma.SelectSubset<T, FolderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FolderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FolderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FolderUpsertArgs>(args: Prisma.SelectSubset<T, FolderUpsertArgs<ExtArgs>>): Prisma.Prisma__FolderClient<runtime.Types.Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FolderCountArgs>(args?: Prisma.Subset<T, FolderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FolderCountAggregateOutputType> : number>;
    aggregate<T extends FolderAggregateArgs>(args: Prisma.Subset<T, FolderAggregateArgs>): Prisma.PrismaPromise<GetFolderAggregateType<T>>;
    groupBy<T extends FolderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FolderGroupByArgs['orderBy'];
    } : {
        orderBy?: FolderGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FolderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFolderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FolderFieldRefs;
}
export interface Prisma__FolderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    owner<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    links<T extends Prisma.Folder$linksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Folder$linksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FolderFieldRefs {
    readonly id: Prisma.FieldRef<"Folder", 'String'>;
    readonly title: Prisma.FieldRef<"Folder", 'String'>;
    readonly description: Prisma.FieldRef<"Folder", 'String'>;
    readonly isShared: Prisma.FieldRef<"Folder", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Folder", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Folder", 'DateTime'>;
    readonly ownerId: Prisma.FieldRef<"Folder", 'String'>;
}
export type FolderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FolderSelect<ExtArgs> | null;
    omit?: Prisma.FolderOmit<ExtArgs> | null;
    include?: Prisma.FolderInclude<ExtArgs> | null;
    where: Prisma.FolderWhereUniqueInput;
};
export type FolderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FolderSelect<ExtArgs> | null;
    omit?: Prisma.FolderOmit<ExtArgs> | null;
    include?: Prisma.FolderInclude<ExtArgs> | null;
    where: Prisma.FolderWhereUniqueInput;
};
export type FolderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FolderSelect<ExtArgs> | null;
    omit?: Prisma.FolderOmit<ExtArgs> | null;
    include?: Prisma.FolderInclude<ExtArgs> | null;
    where?: Prisma.FolderWhereInput;
    orderBy?: Prisma.FolderOrderByWithRelationInput | Prisma.FolderOrderByWithRelationInput[];
    cursor?: Prisma.FolderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FolderScalarFieldEnum | Prisma.FolderScalarFieldEnum[];
};
export type FolderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FolderSelect<ExtArgs> | null;
    omit?: Prisma.FolderOmit<ExtArgs> | null;
    include?: Prisma.FolderInclude<ExtArgs> | null;
    where?: Prisma.FolderWhereInput;
    orderBy?: Prisma.FolderOrderByWithRelationInput | Prisma.FolderOrderByWithRelationInput[];
    cursor?: Prisma.FolderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FolderScalarFieldEnum | Prisma.FolderScalarFieldEnum[];
};
export type FolderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FolderSelect<ExtArgs> | null;
    omit?: Prisma.FolderOmit<ExtArgs> | null;
    include?: Prisma.FolderInclude<ExtArgs> | null;
    where?: Prisma.FolderWhereInput;
    orderBy?: Prisma.FolderOrderByWithRelationInput | Prisma.FolderOrderByWithRelationInput[];
    cursor?: Prisma.FolderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FolderScalarFieldEnum | Prisma.FolderScalarFieldEnum[];
};
export type FolderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FolderSelect<ExtArgs> | null;
    omit?: Prisma.FolderOmit<ExtArgs> | null;
    include?: Prisma.FolderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FolderCreateInput, Prisma.FolderUncheckedCreateInput>;
};
export type FolderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FolderCreateManyInput | Prisma.FolderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FolderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FolderSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FolderOmit<ExtArgs> | null;
    data: Prisma.FolderCreateManyInput | Prisma.FolderCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.FolderIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FolderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FolderSelect<ExtArgs> | null;
    omit?: Prisma.FolderOmit<ExtArgs> | null;
    include?: Prisma.FolderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FolderUpdateInput, Prisma.FolderUncheckedUpdateInput>;
    where: Prisma.FolderWhereUniqueInput;
};
export type FolderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FolderUpdateManyMutationInput, Prisma.FolderUncheckedUpdateManyInput>;
    where?: Prisma.FolderWhereInput;
    limit?: number;
};
export type FolderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FolderSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FolderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FolderUpdateManyMutationInput, Prisma.FolderUncheckedUpdateManyInput>;
    where?: Prisma.FolderWhereInput;
    limit?: number;
    include?: Prisma.FolderIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FolderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FolderSelect<ExtArgs> | null;
    omit?: Prisma.FolderOmit<ExtArgs> | null;
    include?: Prisma.FolderInclude<ExtArgs> | null;
    where: Prisma.FolderWhereUniqueInput;
    create: Prisma.XOR<Prisma.FolderCreateInput, Prisma.FolderUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FolderUpdateInput, Prisma.FolderUncheckedUpdateInput>;
};
export type FolderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FolderSelect<ExtArgs> | null;
    omit?: Prisma.FolderOmit<ExtArgs> | null;
    include?: Prisma.FolderInclude<ExtArgs> | null;
    where: Prisma.FolderWhereUniqueInput;
};
export type FolderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FolderWhereInput;
    limit?: number;
};
export type Folder$linksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LinkSelect<ExtArgs> | null;
    omit?: Prisma.LinkOmit<ExtArgs> | null;
    include?: Prisma.LinkInclude<ExtArgs> | null;
    where?: Prisma.LinkWhereInput;
    orderBy?: Prisma.LinkOrderByWithRelationInput | Prisma.LinkOrderByWithRelationInput[];
    cursor?: Prisma.LinkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LinkScalarFieldEnum | Prisma.LinkScalarFieldEnum[];
};
export type FolderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FolderSelect<ExtArgs> | null;
    omit?: Prisma.FolderOmit<ExtArgs> | null;
    include?: Prisma.FolderInclude<ExtArgs> | null;
};
export {};
