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
            name: 'dataset_1',
            roi: {"x0": 0, "x1": 89917, "y0": 0, "y1": 64016},
            imageSize: [262144, 262144 * 64016 / 89917],
            tiles: 'https://www.acycliq.xyz/MsBrain_Eg1_VS6_JH_V6/region_0/262144px/{z}/{y}/{x}.jpg',
            cellData: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/cellData?ref=master',
            geneData: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/geneData?ref=master',
            cellBoundaries: 'https://api.github.com/repos/acycliq/MsBrain/contents/viewer/data/MsBrain_Eg1_VS6_JH_V6/region_0/cellBoundaries?ref=master',
            class_name_separator: '.' //The delimiter in the class name string, eg if name is Astro.1, then use the dot as a separator, if Astro1 then use an empty string. It is used in a menu/control to show the class names nested under its broader name
        },
        {
            name: 'dataset_2',
            roi: {"x0": 0, "x1": 89917, "y0": 0, "y1": 64016},
            imageSize: [262144, 262144 * 64016 / 89917],
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

