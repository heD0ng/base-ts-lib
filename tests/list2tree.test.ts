import { list2tree } from '../src/index';

describe('handle list data to tree', () => {
    it('should return tree data', () => {
        const input = [
            { id: 2, parentId: 1, name: 'Child 1' },
            { id: 3, parentId: 1, name: 'Child 2' },
            { id: 4, parentId: 2, name: 'Grandchild' },
            { id: 1, parentId: null, name: 'Root' },
        ];
        const output = [
            {
                id: 1,
                parentId: null,
                name: 'Root',
                children: [
                    {
                        id: 2,
                        parentId: 1,
                        name: 'Child 1',
                        children: [
                            {
                                id: 4,
                                parentId: 2,
                                name: 'Grandchild',
                                children: [],
                            },
                        ],
                    },
                    {
                        id: 3,
                        parentId: 1,
                        name: 'Child 2',
                        children: [],
                    },
                ],
            },
        ];
        const res = list2tree(input);
        expect(res).toEqual(output);
    });
});
