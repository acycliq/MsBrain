function config() {
    var ini = [
        {
            name: 'default',
            roi: {"x0": 0, "x1": 89917, "y0": 0, "y1": 64016},
            imageSize: [262144, 262144 * 64016 / 89917],
            tiles: 'https://www.acycliq.xyz/MsBrain_Eg1_VS6_JH_V6/region_0/262144px/{z}/{y}/{x}.jpg',
            cellData: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/cellData?ref=master',
            geneData: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/geneData?ref=master',
            cellBoundaries: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/cellBoundaries?ref=master',
            class_name_separator: '.' //The delimiter in the class name string, eg if name is Astro.1, then use the dot as a separator, if Astro1 then use an empty string. It is used in a menu/control to show the class names nested under its broader name
        },
        {
            name: 'MsBrain_Eg1_VS6_JH_V6_region_1',
            roi: {"x0": 0, "x1": 89523, "y0": 0, "y1": 58294},
            imageSize: [262144, 262144 * 58294 / 89523],
            tiles: 'https://www.acycliq.xyz/MsBrain_Eg1_VS6_JH_V6/region_0/262144px/{z}/{y}/{x}.jpg',
            cellData: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/cellData?ref=master',
            geneData: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/geneData?ref=master',
            cellBoundaries: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/cellBoundaries?ref=master',
            class_name_separator: '.' //The delimiter in the class name string, eg if name is Astro.1, then use the dot as a separator, if Astro1 then use an empty string. It is used in a menu/control to show the class names nested under its broader name
        },
        {
            name: 'MsBrain_Eg2_VS6_V11_JH_region_0',
            roi: {"x0": 0, "x1": 77981, "y0": 0, "y1": 70573},
            imageSize: [262144, 262144 * 70573 / 77981],
            tiles: 'https://www.acycliq.xyz/MsBrain_Eg1_VS6_JH_V6/region_0/262144px/{z}/{y}/{x}.jpg',
            cellData: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/cellData?ref=master',
            geneData: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/geneData?ref=master',
            cellBoundaries: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/cellBoundaries?ref=master',
            class_name_separator: '.' //The delimiter in the class name string, eg if name is Astro.1, then use the dot as a separator, if Astro1 then use an empty string. It is used in a menu/control to show the class names nested under its broader name
        },
        {
            name: 'MsBrain_Eg2_VS6_V11_JH_region_1',
            roi: {"x0": 0, "x1": 68721, "y0": 0, "y1": 40941},
            imageSize: [262144, 262144 * 40941 / 68721],
            tiles: 'https://www.acycliq.xyz/MsBrain_Eg1_VS6_JH_V6/region_0/262144px/{z}/{y}/{x}.jpg',
            cellData: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/cellData?ref=master',
            geneData: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/geneData?ref=master',
            cellBoundaries: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/cellBoundaries?ref=master',
            class_name_separator: '.' //The delimiter in the class name string, eg if name is Astro.1, then use the dot as a separator, if Astro1 then use an empty string. It is used in a menu/control to show the class names nested under its broader name
        },
        {
            name: 'MsBrain_Eg3_VS6_JH_V6_region_0',
            roi: {"x0": 0, "x1": 59766, "y0": 0, "y1": 84513},
            imageSize: [262144 * 59766 / 84513, 262144],
            tiles: 'https://www.acycliq.xyz/MsBrain_Eg1_VS6_JH_V6/region_0/262144px/{z}/{y}/{x}.jpg',
            cellData: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/cellData?ref=master',
            geneData: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/geneData?ref=master',
            cellBoundaries: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/cellBoundaries?ref=master',
            class_name_separator: '.' //The delimiter in the class name string, eg if name is Astro.1, then use the dot as a separator, if Astro1 then use an empty string. It is used in a menu/control to show the class names nested under its broader name
        },
        // {
        //     // MISSING MANIFEST!!
        //     name: 'MsBrain_Eg3_VS6_JH_V6_region_1',
        //     roi: {"x0": 0, "x1": 68721, "y0": 0, "y1": 40941},
        //     imageSize: [262144, 262144 * 40941 / 68721],
        //     tiles: 'https://www.acycliq.xyz/MsBrain_Eg1_VS6_JH_V6/region_0/262144px/{z}/{y}/{x}.jpg',
        //     cellData: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/cellData?ref=master',
        //     geneData: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/geneData?ref=master',
        //     cellBoundaries: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/cellBoundaries?ref=master',
        //     class_name_separator: '.' //The delimiter in the class name string, eg if name is Astro.1, then use the dot as a separator, if Astro1 then use an empty string. It is used in a menu/control to show the class names nested under its broader name
        // },
        {
            name: 'MsBrain_EG4_VS6library_V6_LH_region_0',
            roi: {"x0": 0, "x1": 80570, "y0": 0, "y1": 62062},
            imageSize: [262144, 262144 * 62062 / 80570, ],
            tiles: 'https://www.acycliq.xyz/MsBrain_Eg1_VS6_JH_V6/region_0/262144px/{z}/{y}/{x}.jpg',
            cellData: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/cellData?ref=master',
            geneData: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/geneData?ref=master',
            cellBoundaries: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/cellBoundaries?ref=master',
            class_name_separator: '.' //The delimiter in the class name string, eg if name is Astro.1, then use the dot as a separator, if Astro1 then use an empty string. It is used in a menu/control to show the class names nested under its broader name
        },
        // {
        //     // MISSING MANIFEST!!
        //     name: 'MsBrain_Eg3_VS6_JH_V6_region_1',
        //     roi: {"x0": 0, "x1": 68721, "y0": 0, "y1": 40941},
        //     imageSize: [262144, 262144 * 40941 / 68721],
        //     tiles: 'https://www.acycliq.xyz/MsBrain_Eg1_VS6_JH_V6/region_0/262144px/{z}/{y}/{x}.jpg',
        //     cellData: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/cellData?ref=master',
        //     geneData: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/geneData?ref=master',
        //     cellBoundaries: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/cellBoundaries?ref=master',
        //     class_name_separator: '.' //The delimiter in the class name string, eg if name is Astro.1, then use the dot as a separator, if Astro1 then use an empty string. It is used in a menu/control to show the class names nested under its broader name
        // },
        {
            name: 'MsBrain_Eg5_VS6_JH_V6_region_0',
            roi: {"x0": 0, "x1": 80570, "y0": 0, "y1": 62062},
            imageSize: [262144, 262144 * 62062 / 80570, ],
            tiles: 'https://www.acycliq.xyz/MsBrain_Eg1_VS6_JH_V6/region_0/262144px/{z}/{y}/{x}.jpg',
            cellData: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/cellData?ref=master',
            geneData: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/geneData?ref=master',
            cellBoundaries: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/cellBoundaries?ref=master',
            class_name_separator: '.' //The delimiter in the class name string, eg if name is Astro.1, then use the dot as a separator, if Astro1 then use an empty string. It is used in a menu/control to show the class names nested under its broader name
        },
        {
            name: 'MsBrain_Eg5_VS6_JH_V6_region_1',
            roi: {"x0": 0, "x1": 77981, "y0": 0, "y1": 55757},
            imageSize: [262144, 262144 * 55757 / 77981],
            tiles: 'https://www.acycliq.xyz/MsBrain_Eg1_VS6_JH_V6/region_0/262144px/{z}/{y}/{x}.jpg',
            cellData: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/cellData?ref=master',
            geneData: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/geneData?ref=master',
            cellBoundaries: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/cellBoundaries?ref=master',
            class_name_separator: '.' //The delimiter in the class name string, eg if name is Astro.1, then use the dot as a separator, if Astro1 then use an empty string. It is used in a menu/control to show the class names nested under its broader name
        },








    ];
    var out = d3.map(ini, function (d) {
        return d.name;
    });
    return out
}

