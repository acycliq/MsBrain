function config() {
    var ini = [
        {   // 1.
            name: 'default',
            roi: {"x0": 0, "x1": 98824, "y0": 0, "y1": 77294},
            imageSize: [262144, 262144 * 77294 / 98824],
            tiles: 'https://raw.githubusercontent.com/acycliq/MsBrain_Eg1_VS6_JH_V6/master/region_0/map_tiles/262144px/{z}/{y}/{x}.jpg',
            cellData: 'https://api.github.com/repos/acycliq/vizgen_celltyped/contents/region_0/cellData?ref=master',
            geneData: 'https://api.github.com/repos/acycliq/vizgen_celltyped/contents/region_0/geneData?ref=master',
            cellBoundaries: 'https://api.github.com/repos/acycliq/vizgen_celltyped/contents/region_0/cellBoundaries?ref=master',
            class_name_separator: '.' //The delimiter in the class name string, eg if name is Astro.1, then use the dot as a separator, if Astro1 then use an empty string. It is used in a menu/control to show the class names nested under its broader name
        },
        {   // 2.
            name: 'MsBrain_Eg1_VS6_JH_V6_region_1',
            roi: {"x0": 0, "x1": 99001, "y0": 0, "y1": 74305},
            imageSize: [262144, 262144 * 74305 / 99001],
            tiles: 'https://www.acycliq.xyz/MsBrain_Eg1_VS6_JH_V6/region_1/262144px/{z}/{y}/{x}.jpg_ZZZ',
            cellData: 'https://api.github.com/repos/acycliq/MsBrain_Eg1_VS6_JH_V6/contents/region_1/cellData?ref=master',
            geneData: 'https://api.github.com/repos/acycliq/MsBrain_Eg1_VS6_JH_V6/contents/region_1/geneData?ref=master',
            cellBoundaries: 'https://api.github.com/repos/acycliq/MsBrain_Eg1_VS6_JH_V6/contents/region_1/cellBoundaries?ref=master',
            class_name_separator: '.' //The delimiter in the class name string, eg if name is Astro.1, then use the dot as a separator, if Astro1 then use an empty string. It is used in a menu/control to show the class names nested under its broader name
        },
        {   // 3.
            name: 'MsBrain_Eg2_VS6_V11_JH_region_0',
            roi: {"x0": 0, "x1": 105016, "y0": 0, "y1": 103921},
            imageSize: [262144, 262144 * 103921 / 105016],
            tiles: 'https://www.acycliq.xyz/MsBrain_Eg2_VS6_V11_JH_05-02-2021/region_0/262144px/{z}/{y}/{x}.jpg_ZZZ',
            cellData: 'https://api.github.com/repos/acycliq/MsBrain_Eg2_VS6_V11_JH/contents/region_0/cellData?ref=master',
            geneData: 'https://api.github.com/repos/acycliq/MsBrain_Eg2_VS6_V11_JH/contents/region_0/geneData?ref=master',
            cellBoundaries: 'https://api.github.com/repos/acycliq/MsBrain_Eg2_VS6_V11_JH/contents/region_0/cellBoundaries?ref=master',
            class_name_separator: '.' //The delimiter in the class name string, eg if name is Astro.1, then use the dot as a separator, if Astro1 then use an empty string. It is used in a menu/control to show the class names nested under its broader name
        },
        {   // 4.
            name: 'MsBrain_Eg2_VS6_V11_JH_region_1',
            roi: {"x0": 0, "x1": 78465, "y0": 0, "y1": 76408},
            imageSize: [262144, 262144 * 76408 / 78465],
            tiles: 'https://www.acycliq.xyz/MsBrain_Eg2_VS6_V11_JH_05-02-2021/region_1/262144px/{z}/{y}/{x}.jpg_ZZZ',
            cellData: 'https://api.github.com/repos/acycliq/MsBrain_Eg2_VS6_V11_JH/contents/region_1/cellData?ref=master',
            geneData: 'https://api.github.com/repos/acycliq/MsBrain_Eg2_VS6_V11_JH/contents/region_1/geneData?ref=master',
            cellBoundaries: 'https://api.github.com/repos/acycliq/MsBrain_Eg2_VS6_V11_JH/contents/region_1/cellBoundaries?ref=master',
            class_name_separator: '.' //The delimiter in the class name string, eg if name is Astro.1, then use the dot as a separator, if Astro1 then use an empty string. It is used in a menu/control to show the class names nested under its broader name
        },
        {   // 5.
            name: 'MsBrain_Eg3_VS6_JH_V6_region_0',
            roi: {"x0": 0, "x1": 97102, "y0": 0, "y1": 79603},
            imageSize: [262144, 262144 * 79603 / 97102],
            tiles: 'https://www.acycliq.xyz/MsBrain_Eg3_VS6_JH_V6/region_0/262144px/{z}/{y}/{x}.jpg_ZZZ',
            cellData: 'https://api.github.com/repos/acycliq/MsBrain_Eg3_VS6_JH_V6/contents/region_0/cellData?ref=master',
            geneData: 'https://api.github.com/repos/acycliq/MsBrain_Eg3_VS6_JH_V6/contents/region_0/geneData?ref=master',
            cellBoundaries: 'https://api.github.com/repos/acycliq/MsBrain_Eg3_VS6_JH_V6/contents/region_0/cellBoundaries?ref=master',
            class_name_separator: '.' //The delimiter in the class name string, eg if name is Astro.1, then use the dot as a separator, if Astro1 then use an empty string. It is used in a menu/control to show the class names nested under its broader name
        },
        {   // 6.
            name: 'MsBrain_Eg3_VS6_JH_V6_region_1',
            roi: {"x0": 0, "x1": 93968, "y0": 0, "y1": 73157},
            imageSize: [262144, 262144 * 73157 / 93968, ],
            tiles: 'https://www.acycliq.xyz/MsBrain_Eg3_VS6_JH_V6/region_1/262144px/{z}/{y}/{x}.jpg_ZZZ',
            cellData: 'https://api.github.com/repos/acycliq/MsBrain_Eg3_VS6_JH_V6/contents/region_1/cellData?ref=master',
            geneData: 'https://api.github.com/repos/acycliq/MsBrain_Eg3_VS6_JH_V6/contents/region_1/geneData?ref=master',
            cellBoundaries: 'https://api.github.com/repos/acycliq/MsBrain_Eg3_VS6_JH_V6/contents/region_1/cellBoundaries?ref=master',
            class_name_separator: '.' //The delimiter in the class name string, eg if name is Astro.1, then use the dot as a separator, if Astro1 then use an empty string. It is used in a menu/control to show the class names nested under its broader name
        },
        {   // 7.
            name: 'MsBrain_EG4_VS6library_V6_LH_region_0',
            roi: {"x0": 0, "x1": 80570, "y0": 0, "y1": 62062},
            imageSize: [262144, 262144 * 62062 / 80570, ],
            tiles: 'https://www.acycliq.xyz/MsBrain_EG4_VS6library_V6_LH/region_0/262144px/{z}/{y}/{x}.jpg_ZZZ',
            cellData: 'https://api.github.com/repos/acycliq/MsBrain_EG4_VS6library_V6_LH/contents/region_0/cellData?ref=master',
            geneData: 'https://api.github.com/repos/acycliq/MsBrain_EG4_VS6library_V6_LH/contents/region_0/geneData?ref=master',
            cellBoundaries: 'https://api.github.com/repos/acycliq/MsBrain_EG4_VS6library_V6_LH/contents/region_0/cellBoundaries?ref=master',
            class_name_separator: '.' //The delimiter in the class name string, eg if name is Astro.1, then use the dot as a separator, if Astro1 then use an empty string. It is used in a menu/control to show the class names nested under its broader name
        },
        {   // 8.
            name: 'MsBrain_EG4_VS6library_V6_LH_region_1',
            roi: {"x0": 0, "x1": 84388, "y0": 0, "y1": 60002},
            imageSize: [262144, 262144 * 60002 / 84388, ],
            tiles: 'https://www.acycliq.xyz/MsBrain_EG4_VS6library_V6_LH/region_1/262144px/{z}/{y}/{x}.jpg_ZZZ',
            cellData: 'https://api.github.com/repos/acycliq/MsBrain_EG4_VS6library_V6_LH/contents/region_1/cellData?ref=master',
            geneData: 'https://api.github.com/repos/acycliq/MsBrain_EG4_VS6library_V6_LH/contents/region_1/geneData?ref=master',
            cellBoundaries: 'https://api.github.com/repos/acycliq/MsBrain_EG4_VS6library_V6_LH/contents/region_1/cellBoundaries?ref=master',
            class_name_separator: '.' //The delimiter in the class name string, eg if name is Astro.1, then use the dot as a separator, if Astro1 then use an empty string. It is used in a menu/control to show the class names nested under its broader name
        },
        {   // 9.
            name: 'MsBrain_Eg5_VS6_JH_V6_region_0',
            roi: {"x0": 0, "x1": 77981, "y0": 0, "y1": 59461},
            imageSize: [262144, 262144 * 59461 / 77981, ],
            tiles: 'https://www.acycliq.xyz/MsBrain_Eg5_VS6_JH_V6_05-16-2021/region_0/262144px/{z}/{y}/{x}.jpg_ZZZ',
            cellData: 'https://api.github.com/repos/acycliq/MsBrain_Eg5_VS6_JH_V6/contents/region_0/cellData?ref=master',
            geneData: 'https://api.github.com/repos/acycliq/MsBrain_Eg5_VS6_JH_V6/contents/region_0/geneData?ref=master',
            cellBoundaries: 'https://api.github.com/repos/acycliq/MsBrain_Eg5_VS6_JH_V6/contents//region_0/cellBoundaries?ref=master',
            clip_poly: [(25493, 20300), (25650, 31158), (54841, 32496), (54943, 18648)], // only spots within this poly will be plotted
            class_name_separator: '.' //The delimiter in the class name string, eg if name is Astro.1, then use the dot as a separator, if Astro1 then use an empty string. It is used in a menu/control to show the class names nested under its broader name
        },
        {   // 10.
            name: 'MsBrain_Eg5_VS6_JH_V6_region_1',
            roi: {"x0": 0, "x1": 77981, "y0": 0, "y1": 55757},
            imageSize: [262144, 262144 * 55757 / 77981],
            tiles: 'https://www.acycliq.xyz/MsBrain_Eg5_VS6_JH_V6_05-16-2021/region_1/262144px/{z}/{y}/{x}.jpg_ZZZ',
            cellData: 'https://api.github.com/repos/acycliq/MsBrain_Eg5_VS6_JH_V6/contents/region_1/cellData?ref=master',
            geneData: 'https://api.github.com/repos/acycliq/MsBrain_Eg5_VS6_JH_V6/contents/region_1/geneData?ref=master',
            cellBoundaries: 'https://api.github.com/repos/acycliq/MsBrain_Eg5_VS6_JH_V6/contents/region_1/cellBoundaries?ref=master',
            clip_poly: [(24674, 16221), (25968, 26958), (53383, 25511), (54221, 15535)], // only spots within this poly will be plotted
            class_name_separator: '.' //The delimiter in the class name string, eg if name is Astro.1, then use the dot as a separator, if Astro1 then use an empty string. It is used in a menu/control to show the class names nested under its broader name
        },








    ];
    var out = d3.map(ini, function (d) {
        return d.name;
    });
    return out
}

