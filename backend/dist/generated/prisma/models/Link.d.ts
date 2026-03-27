import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LinkModel = runtime.Types.Result.DefaultSelection<Prisma.$LinkPayload>;
export type AggregateLink = {
    _count: LinkCountAggregateOutputType | null;
    _min: LinkMinAggregateOutputType | null;
    _max: LinkMaxAggregateOutputType | null;
};
export type LinkMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    url: string | null;
    createdAt: Date | null;
    folderId: string | null;
};
export type LinkMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    url: string | null;
    createdAt: Date | null;
    folderId: string | null;
};
export type LinkCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    url: number;
    createdAt: number;
    folderId: number;
    _all: number;
};
export type LinkMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    url?: true;
    createdAt?: true;
    folderId?: true;
};
export type LinkMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    url?: true;
    createdAt?: true;
    folderId?: true;
};
export type LinkCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    url?: true;
    createdAt?: true;
    folderId?: true;
    _all?: true;
};
export type LinkAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LinkWhereInput;
    orderBy?: Prisma.LinkOrderByWithRelationInput | Prisma.LinkOrderByWithRelationInput[];
    cursor?: Prisma.LinkWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LinkCountAggregateInputType;
    _min?: LinkMinAggregateInputType;
    _max?: LinkMaxAggregateInputType;
};
export type GetLinkAggregateType<T extends LinkAggregateArgs> = {
    [P in keyof T & keyof AggregateLink]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLink[P]> : Prisma.GetScalarType<T[P], AggregateLink[P]>;
};
export type LinkGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LinkWhereInput;
    orderBy?: Prisma.LinkOrderByWithAggregationInput | Prisma.LinkOrderByWithAggregationInput[];
    by: Prisma.LinkScalarFieldEnum[] | Prisma.LinkScalarFieldEnum;
    having?: Prisma.LinkScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LinkCountAggregateInputType | true;
    _min?: LinkMinAggregateInputType;
    _max?: LinkMaxAggregateInputType;
};
export type LinkGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    url: string;
    createdAt: Date;
    folderId: string;
    _count: LinkCountAggregateOutputType | null;
    _min: LinkMinAggregateOutputType | null;
    _max: LinkMaxAggregateOutputType | null;
};
type GetLinkGroupByPayload<T extends LinkGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LinkGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LinkGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LinkGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LinkGroupByOutputType[P]>;
}>>;
export type LinkWhereInput = {
    AND?: Prisma.LinkWhereInput | Prisma.LinkWhereInput[];
    OR?: Prisma.LinkWhereInput[];
    NOT?: Prisma.LinkWhereInput | Prisma.LinkWhereInput[];
    id?: Prisma.StringFilter<"Link"> | string;
    title?: Prisma.StringFilter<"Link"> | string;
    description?: Prisma.StringNullableFilter<"Link"> | string | null;
    url?: Prisma.StringFilter<"Link"> | string;
    createdAt?: Prisma.DateTimeFilter<"Link"> | Date | string;
    folderId?: Prisma.StringFilter<"Link"> | string;
    folder?: Prisma.XOR<Prisma.FolderScalarRelationFilter, Prisma.FolderWhereInput>;
};
export type LinkOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    url?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    folderId?: Prisma.SortOrder;
    folder?: Prisma.FolderOrderByWithRelationInput;
};
export type LinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LinkWhereInput | Prisma.LinkWhereInput[];
    OR?: Prisma.LinkWhereInput[];
    NOT?: Prisma.LinkWhereInput | Prisma.LinkWhereInput[];
    title?: Prisma.StringFilter<"Link"> | string;
    description?: Prisma.StringNullableFilter<"Link"> | string | null;
    url?: Prisma.StringFilter<"Link"> | string;
    createdAt?: Prisma.DateTimeFilter<"Link"> | Date | string;
    folderId?: Prisma.StringFilter<"Link"> | string;
    folder?: Prisma.XOR<Prisma.FolderScalarRelationFilter, Prisma.FolderWhereInput>;
}, "id">;
export type LinkOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    url?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    folderId?: Prisma.SortOrder;
    _count?: Prisma.LinkCountOrderByAggregateInput;
    _max?: Prisma.LinkMaxOrderByAggregateInput;
    _min?: Prisma.LinkMinOrderByAggregateInput;
};
export type LinkScalarWhereWithAggregatesInput = {
    AND?: Prisma.LinkScalarWhereWithAggregatesInput | Prisma.LinkScalarWhereWithAggregatesInput[];
    OR?: Prisma.LinkScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LinkScalarWhereWithAggregatesInput | Prisma.LinkScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Link"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Link"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Link"> | string | null;
    url?: Prisma.StringWithAggregatesFilter<"Link"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Link"> | Date | string;
    folderId?: Prisma.StringWithAggregatesFilter<"Link"> | string;
};
export type LinkCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    url: string;
    createdAt?: Date | string;
    folder: Prisma.FolderCreateNestedOneWithoutLinksInput;
};
export type LinkUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    url: string;
    createdAt?: Date | string;
    folderId: string;
};
export type LinkUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    folder?: Prisma.FolderUpdateOneRequiredWithoutLinksNestedInput;
};
export type LinkUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    folderId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type LinkCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    url: string;
    createdAt?: Date | string;
    folderId: string;
};
export type LinkUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LinkUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    folderId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type LinkListRelationFilter = {
    every?: Prisma.LinkWhereInput;
    some?: Prisma.LinkWhereInput;
    none?: Prisma.LinkWhereInput;
};
export type LinkOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LinkCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    folderId?: Prisma.SortOrder;
};
export type LinkMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    folderId?: Prisma.SortOrder;
};
export type LinkMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    folderId?: Prisma.SortOrder;
};
export type LinkCreateNestedManyWithoutFolderInput = {
    create?: Prisma.XOR<Prisma.LinkCreateWithoutFolderInput, Prisma.LinkUncheckedCreateWithoutFolderInput> | Prisma.LinkCreateWithoutFolderInput[] | Prisma.LinkUncheckedCreateWithoutFolderInput[];
    connectOrCreate?: Prisma.LinkCreateOrConnectWithoutFolderInput | Prisma.LinkCreateOrConnectWithoutFolderInput[];
    createMany?: Prisma.LinkCreateManyFolderInputEnvelope;
    connect?: Prisma.LinkWhereUniqueInput | Prisma.LinkWhereUniqueInput[];
};
export type LinkUncheckedCreateNestedManyWithoutFolderInput = {
    create?: Prisma.XOR<Prisma.LinkCreateWithoutFolderInput, Prisma.LinkUncheckedCreateWithoutFolderInput> | Prisma.LinkCreateWithoutFolderInput[] | Prisma.LinkUncheckedCreateWithoutFolderInput[];
    connectOrCreate?: Prisma.LinkCreateOrConnectWithoutFolderInput | Prisma.LinkCreateOrConnectWithoutFolderInput[];
    createMany?: Prisma.LinkCreateManyFolderInputEnvelope;
    connect?: Prisma.LinkWhereUniqueInput | Prisma.LinkWhereUniqueInput[];
};
export type LinkUpdateManyWithoutFolderNestedInput = {
    create?: Prisma.XOR<Prisma.LinkCreateWithoutFolderInput, Prisma.LinkUncheckedCreateWithoutFolderInput> | Prisma.LinkCreateWithoutFolderInput[] | Prisma.LinkUncheckedCreateWithoutFolderInput[];
    connectOrCreate?: Prisma.LinkCreateOrConnectWithoutFolderInput | Prisma.LinkCreateOrConnectWithoutFolderInput[];
    upsert?: Prisma.LinkUpsertWithWhereUniqueWithoutFolderInput | Prisma.LinkUpsertWithWhereUniqueWithoutFolderInput[];
    createMany?: Prisma.LinkCreateManyFolderInputEnvelope;
    set?: Prisma.LinkWhereUniqueInput | Prisma.LinkWhereUniqueInput[];
    disconnect?: Prisma.LinkWhereUniqueInput | Prisma.LinkWhereUniqueInput[];
    delete?: Prisma.LinkWhereUniqueInput | Prisma.LinkWhereUniqueInput[];
    connect?: Prisma.LinkWhereUniqueInput | Prisma.LinkWhereUniqueInput[];
    update?: Prisma.LinkUpdateWithWhereUniqueWithoutFolderInput | Prisma.LinkUpdateWithWhereUniqueWithoutFolderInput[];
    updateMany?: Prisma.LinkUpdateManyWithWhereWithoutFolderInput | Prisma.LinkUpdateManyWithWhereWithoutFolderInput[];
    deleteMany?: Prisma.LinkScalarWhereInput | Prisma.LinkScalarWhereInput[];
};
export type LinkUncheckedUpdateManyWithoutFolderNestedInput = {
    create?: Prisma.XOR<Prisma.LinkCreateWithoutFolderInput, Prisma.LinkUncheckedCreateWithoutFolderInput> | Prisma.LinkCreateWithoutFolderInput[] | Prisma.LinkUncheckedCreateWithoutFolderInput[];
    connectOrCreate?: Prisma.LinkCreateOrConnectWithoutFolderInput | Prisma.LinkCreateOrConnectWithoutFolderInput[];
    upsert?: Prisma.LinkUpsertWithWhereUniqueWithoutFolderInput | Prisma.LinkUpsertWithWhereUniqueWithoutFolderInput[];
    createMany?: Prisma.LinkCreateManyFolderInputEnvelope;
    set?: Prisma.LinkWhereUniqueInput | Prisma.LinkWhereUniqueInput[];
    disconnect?: Prisma.LinkWhereUniqueInput | Prisma.LinkWhereUniqueInput[];
    delete?: Prisma.LinkWhereUniqueInput | Prisma.LinkWhereUniqueInput[];
    connect?: Prisma.LinkWhereUniqueInput | Prisma.LinkWhereUniqueInput[];
    update?: Prisma.LinkUpdateWithWhereUniqueWithoutFolderInput | Prisma.LinkUpdateWithWhereUniqueWithoutFolderInput[];
    updateMany?: Prisma.LinkUpdateManyWithWhereWithoutFolderInput | Prisma.LinkUpdateManyWithWhereWithoutFolderInput[];
    deleteMany?: Prisma.LinkScalarWhereInput | Prisma.LinkScalarWhereInput[];
};
export type LinkCreateWithoutFolderInput = {
    id?: string;
    title: string;
    description?: string | null;
    url: string;
    createdAt?: Date | string;
};
export type LinkUncheckedCreateWithoutFolderInput = {
    id?: string;
    title: string;
    description?: string | null;
    url: string;
    createdAt?: Date | string;
};
export type LinkCreateOrConnectWithoutFolderInput = {
    where: Prisma.LinkWhereUniqueInput;
    create: Prisma.XOR<Prisma.LinkCreateWithoutFolderInput, Prisma.LinkUncheckedCreateWithoutFolderInput>;
};
export type LinkCreateManyFolderInputEnvelope = {
    data: Prisma.LinkCreateManyFolderInput | Prisma.LinkCreateManyFolderInput[];
    skipDuplicates?: boolean;
};
export type LinkUpsertWithWhereUniqueWithoutFolderInput = {
    where: Prisma.LinkWhereUniqueInput;
    update: Prisma.XOR<Prisma.LinkUpdateWithoutFolderInput, Prisma.LinkUncheckedUpdateWithoutFolderInput>;
    create: Prisma.XOR<Prisma.LinkCreateWithoutFolderInput, Prisma.LinkUncheckedCreateWithoutFolderInput>;
};
export type LinkUpdateWithWhereUniqueWithoutFolderInput = {
    where: Prisma.LinkWhereUniqueInput;
    data: Prisma.XOR<Prisma.LinkUpdateWithoutFolderInput, Prisma.LinkUncheckedUpdateWithoutFolderInput>;
};
export type LinkUpdateManyWithWhereWithoutFolderInput = {
    where: Prisma.LinkScalarWhereInput;
    data: Prisma.XOR<Prisma.LinkUpdateManyMutationInput, Prisma.LinkUncheckedUpdateManyWithoutFolderInput>;
};
export type LinkScalarWhereInput = {
    AND?: Prisma.LinkScalarWhereInput | Prisma.LinkScalarWhereInput[];
    OR?: Prisma.LinkScalarWhereInput[];
    NOT?: Prisma.LinkScalarWhereInput | Prisma.LinkScalarWhereInput[];
    id?: Prisma.StringFilter<"Link"> | string;
    title?: Prisma.StringFilter<"Link"> | string;
    description?: Prisma.StringNullableFilter<"Link"> | string | null;
    url?: Prisma.StringFilter<"Link"> | string;
    createdAt?: Prisma.DateTimeFilter<"Link"> | Date | string;
    folderId?: Prisma.StringFilter<"Link"> | string;
};
export type LinkCreateManyFolderInput = {
    id?: string;
    title: string;
    description?: string | null;
    url: string;
    createdAt?: Date | string;
};
export type LinkUpdateWithoutFolderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LinkUncheckedUpdateWithoutFolderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LinkUncheckedUpdateManyWithoutFolderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LinkSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    url?: boolean;
    createdAt?: boolean;
    folderId?: boolean;
    folder?: boolean | Prisma.FolderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["link"]>;
export type LinkSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    url?: boolean;
    createdAt?: boolean;
    folderId?: boolean;
    folder?: boolean | Prisma.FolderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["link"]>;
export type LinkSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    url?: boolean;
    createdAt?: boolean;
    folderId?: boolean;
    folder?: boolean | Prisma.FolderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["link"]>;
export type LinkSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    url?: boolean;
    createdAt?: boolean;
    folderId?: boolean;
};
export type LinkOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "url" | "createdAt" | "folderId", ExtArgs["result"]["link"]>;
export type LinkInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    folder?: boolean | Prisma.FolderDefaultArgs<ExtArgs>;
};
export type LinkIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    folder?: boolean | Prisma.FolderDefaultArgs<ExtArgs>;
};
export type LinkIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    folder?: boolean | Prisma.FolderDefaultArgs<ExtArgs>;
};
export type $LinkPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Link";
    objects: {
        folder: Prisma.$FolderPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        description: string | null;
        url: string;
        createdAt: Date;
        folderId: string;
    }, ExtArgs["result"]["link"]>;
    composites: {};
};
export type LinkGetPayload<S extends boolean | null | undefined | LinkDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LinkPayload, S>;
export type LinkCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LinkCountAggregateInputType | true;
};
export interface LinkDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Link'];
        meta: {
            name: 'Link';
        };
    };
    findUnique<T extends LinkFindUniqueArgs>(args: Prisma.SelectSubset<T, LinkFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LinkClient<runtime.Types.Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LinkFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LinkClient<runtime.Types.Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LinkFindFirstArgs>(args?: Prisma.SelectSubset<T, LinkFindFirstArgs<ExtArgs>>): Prisma.Prisma__LinkClient<runtime.Types.Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LinkFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LinkFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LinkClient<runtime.Types.Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LinkFindManyArgs>(args?: Prisma.SelectSubset<T, LinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LinkCreateArgs>(args: Prisma.SelectSubset<T, LinkCreateArgs<ExtArgs>>): Prisma.Prisma__LinkClient<runtime.Types.Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LinkCreateManyArgs>(args?: Prisma.SelectSubset<T, LinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LinkCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LinkDeleteArgs>(args: Prisma.SelectSubset<T, LinkDeleteArgs<ExtArgs>>): Prisma.Prisma__LinkClient<runtime.Types.Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LinkUpdateArgs>(args: Prisma.SelectSubset<T, LinkUpdateArgs<ExtArgs>>): Prisma.Prisma__LinkClient<runtime.Types.Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LinkDeleteManyArgs>(args?: Prisma.SelectSubset<T, LinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LinkUpdateManyArgs>(args: Prisma.SelectSubset<T, LinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LinkUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LinkUpsertArgs>(args: Prisma.SelectSubset<T, LinkUpsertArgs<ExtArgs>>): Prisma.Prisma__LinkClient<runtime.Types.Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LinkCountArgs>(args?: Prisma.Subset<T, LinkCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LinkCountAggregateOutputType> : number>;
    aggregate<T extends LinkAggregateArgs>(args: Prisma.Subset<T, LinkAggregateArgs>): Prisma.PrismaPromise<GetLinkAggregateType<T>>;
    groupBy<T extends LinkGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LinkGroupByArgs['orderBy'];
    } : {
        orderBy?: LinkGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LinkFieldRefs;
}
export interface Prisma__LinkClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    folder<T extends Prisma.FolderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FolderDefaultArgs<ExtArgs>>): Prisma.Prisma__FolderClient<runtime.Types.Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LinkFieldRefs {
    readonly id: Prisma.FieldRef<"Link", 'String'>;
    readonly title: Prisma.FieldRef<"Link", 'String'>;
    readonly description: Prisma.FieldRef<"Link", 'String'>;
    readonly url: Prisma.FieldRef<"Link", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Link", 'DateTime'>;
    readonly folderId: Prisma.FieldRef<"Link", 'String'>;
}
export type LinkFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LinkSelect<ExtArgs> | null;
    omit?: Prisma.LinkOmit<ExtArgs> | null;
    include?: Prisma.LinkInclude<ExtArgs> | null;
    where: Prisma.LinkWhereUniqueInput;
};
export type LinkFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LinkSelect<ExtArgs> | null;
    omit?: Prisma.LinkOmit<ExtArgs> | null;
    include?: Prisma.LinkInclude<ExtArgs> | null;
    where: Prisma.LinkWhereUniqueInput;
};
export type LinkFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LinkFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LinkFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LinkCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LinkSelect<ExtArgs> | null;
    omit?: Prisma.LinkOmit<ExtArgs> | null;
    include?: Prisma.LinkInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LinkCreateInput, Prisma.LinkUncheckedCreateInput>;
};
export type LinkCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LinkCreateManyInput | Prisma.LinkCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LinkCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LinkSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LinkOmit<ExtArgs> | null;
    data: Prisma.LinkCreateManyInput | Prisma.LinkCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LinkIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LinkUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LinkSelect<ExtArgs> | null;
    omit?: Prisma.LinkOmit<ExtArgs> | null;
    include?: Prisma.LinkInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LinkUpdateInput, Prisma.LinkUncheckedUpdateInput>;
    where: Prisma.LinkWhereUniqueInput;
};
export type LinkUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LinkUpdateManyMutationInput, Prisma.LinkUncheckedUpdateManyInput>;
    where?: Prisma.LinkWhereInput;
    limit?: number;
};
export type LinkUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LinkSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LinkOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LinkUpdateManyMutationInput, Prisma.LinkUncheckedUpdateManyInput>;
    where?: Prisma.LinkWhereInput;
    limit?: number;
    include?: Prisma.LinkIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LinkUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LinkSelect<ExtArgs> | null;
    omit?: Prisma.LinkOmit<ExtArgs> | null;
    include?: Prisma.LinkInclude<ExtArgs> | null;
    where: Prisma.LinkWhereUniqueInput;
    create: Prisma.XOR<Prisma.LinkCreateInput, Prisma.LinkUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LinkUpdateInput, Prisma.LinkUncheckedUpdateInput>;
};
export type LinkDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LinkSelect<ExtArgs> | null;
    omit?: Prisma.LinkOmit<ExtArgs> | null;
    include?: Prisma.LinkInclude<ExtArgs> | null;
    where: Prisma.LinkWhereUniqueInput;
};
export type LinkDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LinkWhereInput;
    limit?: number;
};
export type LinkDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LinkSelect<ExtArgs> | null;
    omit?: Prisma.LinkOmit<ExtArgs> | null;
    include?: Prisma.LinkInclude<ExtArgs> | null;
};
export {};
