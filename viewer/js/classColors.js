function classColorsCodes()
{
    var out = [

        {className: 'RNA.n02_Oligodendrocyte', IdentifiedType: 'RNA.n02_Oligodendrocyte', color:'#B8860B'},
        {className: 'RNA.n03_Astrocyte', IdentifiedType: 'RNA.n03_Astrocyte', color:'#228B22'},
        {className: 'RNA.n06_OPCs', IdentifiedType: 'RNA.n06_OPCs', color:'#DAA520'},
        {className: 'RNA.n09_PVM.Micro', IdentifiedType: 'RNA.n09_PVM.Micro', color:'#FF8C00'},
        {className: 'RNA.n11_Ependymocyte', IdentifiedType: 'RNA.n11_Ependymocyte', color:'#9932CC'},
        {className: 'RNA.n12_Oligodendrocyte', IdentifiedType: 'RNA.n12_Oligodendrocyte', color:'#B8860B'},
        {className: 'RNA.n14_VECs.Pericyte', IdentifiedType: 'RNA.n14_VECs.Pericyte', color:'#FF69B4'},
        {className: 'RNA.n15_Astrocyte', IdentifiedType: 'RNA.n15_Astrocyte', color:'#228B22'},
        {className: 'RNA.n17_VLMCs', IdentifiedType: 'RNA.n17_VLMCs', color:'#FFB6C1'},
        {className: 'RNA.n19_OPCs', IdentifiedType: 'RNA.n19_OPCs', color:'#DAA520'},
        {className: 'RNA.n22_CPE.cells', IdentifiedType: 'RNA.n22_CPE.cells', color:'#87CEFA'},
        {className: 'RNA.n23_Astrocyte', IdentifiedType: 'RNA.n23_Astrocyte', color:'#228B22'},
        {className: 'RNA.n25_VLMCs', IdentifiedType: 'RNA.n25_VLMCs', color:'#FFA07A'},
        {className: 'RNA.0_Aifm3.Kcna1', IdentifiedType: 'RNA.0_Aifm3.Kcna1', color:'#00FFFF'},
        {className: 'RNA.1_Zfp804b', IdentifiedType: 'RNA.1_Zfp804b', color:'#7FFFD4'},
        {className: 'RNA.2_Gm32647.Lhx4', IdentifiedType: 'RNA.2_Gm32647.Lhx4', color:'#F0FFFF'},
        {className: 'RNA.3_Th.Slc6a2', IdentifiedType: 'RNA.3_Th.Slc6a2', color:'#0000FF'},
        {className: 'RNA.4_Penk', IdentifiedType: 'RNA.4_Penk', color:'#8A2BE2'},
        {className: 'RNA.5_Foxp2.Cck', IdentifiedType: 'RNA.5_Foxp2.Cck', color:'#DEB887'},
        {className: 'RNA.6_A330049N07Rik.Lhx1', IdentifiedType: 'RNA.6_A330049N07Rik.Lhx1', color:'#5F9EA0'},
        {className: 'RNA.7_Grin2c.Lamp5', IdentifiedType: 'RNA.7_Grin2c.Lamp5', color:'#7FFF00'},
        {className: 'RNA.8_Nefl.Nefm', IdentifiedType: 'RNA.8_Nefl.Nefm', color:'#D2691E'},
        {className: 'RNA.9_Sst.Pth2', IdentifiedType: 'RNA.9_Sst.Pth2', color:'#DC143C'},
        {className: 'RNA.10_St18.Gpr83', IdentifiedType: 'RNA.10_St18.Gpr83', color:'#FFF8DC'},
        {className: 'RNA.11_Erbb4.Sox6', IdentifiedType: 'RNA.11_Erbb4.Sox6', color:'#00008B'},
        {className: 'RNA.12_Crh.Onecut3', IdentifiedType: 'RNA.12_Crh.Onecut3', color:'#008B8B'},
        {className: 'RNA.13_Tac1.Itga1', IdentifiedType: 'RNA.13_Tac1.Itga1', color:'#B8860B'},
        {className: 'RNA.14_Itih5.Bnc2', IdentifiedType: 'RNA.14_Itih5.Bnc2', color:'#A9A9A9'},
        {className: 'RNA.15_Chat.Slc5a7', IdentifiedType: 'RNA.15_Chat.Slc5a7', color:'#006400'},
        {className: 'RNA.16_Glp1r.Nr2f2', IdentifiedType: 'RNA.16_Glp1r.Nr2f2', color:'#BDB76B'},
        {className: 'RNA.17_Hmcn1.Lepr', IdentifiedType: 'RNA.17_Hmcn1.Lepr', color:'#8B008B'},
        {className: 'RNA.18_Il1rapl2', IdentifiedType: 'RNA.18_Il1rapl2', color:'#556B2F'},
        {className: 'RNA.19_Adarb2.Tacr1', IdentifiedType: 'RNA.19_Adarb2.Tacr1', color:'#FF8C00'},
        {className: 'RNA.20_Skor2.Rxfp1', IdentifiedType: 'RNA.20_Skor2.Rxfp1', color:'#9932CC'},
        {className: 'RNA.21_Rmst.Cplane1', IdentifiedType: 'RNA.21_Rmst.Cplane1', color:'#8B0000'},
        {className: 'RNA.22_Necab1.Synpr', IdentifiedType: 'RNA.22_Necab1.Synpr', color:'#E9967A'},
        {className: 'RNA.23_Chst9.Pou6f2', IdentifiedType: 'RNA.23_Chst9.Pou6f2', color:'#8FBC8F'},
        {className: 'RNA.24_Cntn5', IdentifiedType: 'RNA.24_Cntn5', color:'#483D8B'},
        {className: 'RNA.25_Galntl6.Gm26905', IdentifiedType: 'RNA.25_Galntl6.Gm26905', color:'#00CED1'},
        {className: 'RNA.26_Sox2ot.Lhx4', IdentifiedType: 'RNA.26_Sox2ot.Lhx4', color:'#9400D3'},
        {className: 'RNA.27_Nts.Col5a2', IdentifiedType: 'RNA.27_Nts.Col5a2', color:'#FF1493'},
        {className: 'RNA.28_Vav3.Vmn1r206', IdentifiedType: 'RNA.28_Vav3.Vmn1r206', color:'#00BFFF'},
        {className: 'RNA.29_Gpc5.Gm20713', IdentifiedType: 'RNA.29_Gpc5.Gm20713', color:'#696969'},
        {className: 'RNA.30_Nmb.Cd24a', IdentifiedType: 'RNA.30_Nmb.Cd24a', color:'#228B22'},
        {className: 'RNA.31_Calca.Il20ra', IdentifiedType: 'RNA.31_Calca.Il20ra', color:'#DC143C'},
        {className: 'RNA.32_Abi3bp.Chst9', IdentifiedType: 'RNA.32_Abi3bp.Chst9', color:'#1E90FF'},
        {className: 'RNA.33_Col11a1', IdentifiedType: 'RNA.33_Col11a1', color:'#B22222'},
        {className: 'RNA.34_Tnc.CN725425', IdentifiedType: 'RNA.34_Tnc.CN725425', color:'#FFFAF0'},
        {className: 'RNA.35_Cpne9.Col27a1', IdentifiedType: 'RNA.35_Cpne9.Col27a1', color:'#DCDCDC'},
        {className: 'RNA.36_Tph2.Slc6a4', IdentifiedType: 'RNA.36_Tph2.Slc6a4', color:'#A52A2A'},
        {className: 'RNA.37_Ttn.Adamtsl5', IdentifiedType: 'RNA.37_Ttn.Adamtsl5', color:'#F8F8FF'},
        {className: 'RNA.38_Abi3bp.Rspo3', IdentifiedType: 'RNA.38_Abi3bp.Rspo3', color:'#FFD700'},
        {className: 'RNA.39_Penk.Brs3', IdentifiedType: 'RNA.39_Penk.Brs3', color:'#DAA520'},
        {className: 'RNA.40_Zfp804b.Ghr', IdentifiedType: 'RNA.40_Zfp804b.Ghr', color:'#808080'},
        {className: 'RNA.41_Usp24.Gm36719', IdentifiedType: 'RNA.41_Usp24.Gm36719', color:'#008000'},
        {className: 'RNA.42_Npy', IdentifiedType: 'RNA.42_Npy', color:'#ADFF2F'},
        {className: 'RNA.43_Piezo2.Anxa2', IdentifiedType: 'RNA.43_Piezo2.Anxa2', color:'#F0FFF0'},
        {className: 'RNA.44_Fgf10.Oprk1', IdentifiedType: 'RNA.44_Fgf10.Oprk1', color:'#FF69B4'},
        {className: 'RNA.45_Mybpc1.Grp', IdentifiedType: 'RNA.45_Mybpc1.Grp', color:'#CD5C5C'},
        {className: 'RNA.46_Nps.Qrfpr', IdentifiedType: 'RNA.46_Nps.Qrfpr', color:'#4B0082'},
        {className: 'RNA.47_Adarb2.Prlr', IdentifiedType: 'RNA.47_Adarb2.Prlr', color:'#FFFFF0'},
        {className: 'RNA.48_Gm32647.Pou6f2', IdentifiedType: 'RNA.48_Gm32647.Pou6f2', color:'#F0E68C'},
        {className: 'RNA.49_Tcf7l2.Tfap2d', IdentifiedType: 'RNA.49_Tcf7l2.Tfap2d', color:'#E6E6FA'},
        {className: 'RNA.50_Slc13a3.Cdh23', IdentifiedType: 'RNA.50_Slc13a3.Cdh23', color:'#FFF0F5'},
        {className: 'RNA.51_Col11a1.Nfib', IdentifiedType: 'RNA.51_Col11a1.Nfib', color:'#7CFC00'},
        {className: 'RNA.52_Il1rapl2.Gpr101', IdentifiedType: 'RNA.52_Il1rapl2.Gpr101', color:'#FFFACD'},
        {className: 'RNA.53_Tac1.Samd3', IdentifiedType: 'RNA.53_Tac1.Samd3', color:'#ADD8E6'},
        {className: 'RNA.54_Col11a1.Zfhx3', IdentifiedType: 'RNA.54_Col11a1.Zfhx3', color:'#E0FFFF'},
        {className: 'RNA.55_Grik1', IdentifiedType: 'RNA.55_Grik1', color:'#FAFAD2'},
        {className: 'RNA.56_Cartpt.Cck', IdentifiedType: 'RNA.56_Cartpt.Cck', color:'#F08080'},
        {className: 'RNA.0_Pax3.Col6a5', IdentifiedType: 'RNA.0_Pax3.Col6a5', color:'#D3D3D3'},
        {className: 'RNA.1_Col24a1.Grin2c', IdentifiedType: 'RNA.1_Col24a1.Grin2c', color:'#90EE90'},
        {className: 'RNA.2_Rmst.Cplane1', IdentifiedType: 'RNA.2_Rmst.Cplane1', color:'#FFB6C1'},
        {className: 'RNA.3_Reln.Fbn2', IdentifiedType: 'RNA.3_Reln.Fbn2', color:'#FFA07A'},
        {className: 'RNA.4_Pax6.Adamts18', IdentifiedType: 'RNA.4_Pax6.Adamts18', color:'#20B2AA'},
        {className: 'RNA.5_Zfhx3.Onecut1', IdentifiedType: 'RNA.5_Zfhx3.Onecut1', color:'#87CEFA'},
        {className: 'RNA.6_Sox6.Pax7', IdentifiedType: 'RNA.6_Sox6.Pax7', color:'#778899'},
        {className: 'RNA.7_Pnoc.Alkal2', IdentifiedType: 'RNA.7_Pnoc.Alkal2', color:'#B0C4DE'},
        {className: 'RNA.8_Col25a1.Kcnh8', IdentifiedType: 'RNA.8_Col25a1.Kcnh8', color:'#FFFFE0'},
        {className: 'RNA.9_Otx2os1.Pou6f2', IdentifiedType: 'RNA.9_Otx2os1.Pou6f2', color:'#00FF00'},
        {className: 'RNA.10_Zfhx3.Pappa2', IdentifiedType: 'RNA.10_Zfhx3.Pappa2', color:'#32CD32'},
        {className: 'RNA.11_Sst.2600014E21Rik', IdentifiedType: 'RNA.11_Sst.2600014E21Rik', color:'#FAF0E6'},
        {className: 'RNA.12_Satb1.Adra1a', IdentifiedType: 'RNA.12_Satb1.Adra1a', color:'#FF00FF'},
        {className: 'RNA.13_Foxp2.Slc24a4', IdentifiedType: 'RNA.13_Foxp2.Slc24a4', color:'#800000'},
        {className: 'RNA.14_Rxfp1.Pde11a', IdentifiedType: 'RNA.14_Rxfp1.Pde11a', color:'#66CDAA'},
        {className: 'RNA.15_Calca.Crhbp', IdentifiedType: 'RNA.15_Calca.Crhbp', color:'#0000CD'},
        {className: 'RNA.16_Tacr1.Il1rap', IdentifiedType: 'RNA.16_Tacr1.Il1rap', color:'#BA55D3'},
        {className: 'RNA.17_Ebf2.Robo3', IdentifiedType: 'RNA.17_Ebf2.Robo3', color:'#9370DB'},
        {className: 'RNA.18_Penk.Col13a1', IdentifiedType: 'RNA.18_Penk.Col13a1', color:'#3CB371'},
        {className: 'RNA.19_Zfhx3.Col12a1', IdentifiedType: 'RNA.19_Zfhx3.Col12a1', color:'#7B68EE'},
        {className: 'RNA.20_Sema3e.Ikzf1', IdentifiedType: 'RNA.20_Sema3e.Ikzf1', color:'#00FA9A'},
        {className: 'RNA.21_Rln3.Nmb', IdentifiedType: 'RNA.21_Rln3.Nmb', color:'#48D1CC'},
        {className: 'RNA.22_Penk.Ecel1', IdentifiedType: 'RNA.22_Penk.Ecel1', color:'#C71585'},
        {className: 'RNA.23_Col11a1.Col4a5', IdentifiedType: 'RNA.23_Col11a1.Col4a5', color:'#191970'},
        {className: 'RNA.24_C130060K24Rik.Htr2a', IdentifiedType: 'RNA.24_C130060K24Rik.Htr2a', color:'#F5FFFA'},
        {className: 'RNA.25_Lamb1.Calb2', IdentifiedType: 'RNA.25_Lamb1.Calb2', color:'#FFE4E1'},
        {className: 'RNA.26_Tnnt2.Gpr6', IdentifiedType: 'RNA.26_Tnnt2.Gpr6', color:'#FFE4B5'},
        {className: 'RNA.27_Best1.Gabrq', IdentifiedType: 'RNA.27_Best1.Gabrq', color:'#FFDEAD'},
        {className: 'RNA.28_Rreb1.Gm48521', IdentifiedType: 'RNA.28_Rreb1.Gm48521', color:'#000080'},
        {className: 'RNA.29_Ikzf1.Ctxn3', IdentifiedType: 'RNA.29_Ikzf1.Ctxn3', color:'#FDF5E6'},
        {className: 'RNA.30_Chrdl1.Glp1r', IdentifiedType: 'RNA.30_Chrdl1.Glp1r', color:'#FFA500'},
        {className: 'RNA.31_Tnnt1.Chrdl1', IdentifiedType: 'RNA.31_Tnnt1.Chrdl1', color:'#FFB6C1'},
        {className: 'RNA.32_Grik1.Alkal2', IdentifiedType: 'RNA.32_Grik1.Alkal2', color:'#DA70D6'},
        {className: 'RNA.33_Sox2ot.Gm38505', IdentifiedType: 'RNA.33_Sox2ot.Gm38505', color:'#EEE8AA'},
        {className: 'RNA.34_Pax2.Tfap2b', IdentifiedType: 'RNA.34_Pax2.Tfap2b', color:'#DB7093'},
        {className: 'RNA.35_Arhgap6.Nmu', IdentifiedType: 'RNA.35_Arhgap6.Nmu', color:'#FFEFD5'},
        {className: 'RNA.36_Col1a2.Nmb', IdentifiedType: 'RNA.36_Col1a2.Nmb', color:'#FFDAB9'},
        {className: 'RNA.37_Galntl6.Gm26905', IdentifiedType: 'RNA.37_Galntl6.Gm26905', color:'#CD853F'},
        {className: 'RNA.38_Npsr1', IdentifiedType: 'RNA.38_Npsr1', color:'#FFC0CB'},
        {className: 'RNA.39_Prss23.Scube2', IdentifiedType: 'RNA.39_Prss23.Scube2', color:'#DDA0DD'},
        {className: 'RNA.40_Penk.Robo3', IdentifiedType: 'RNA.40_Penk.Robo3', color:'#800080'},
        {className: 'Zero', IdentifiedType: 'Zero', color: '#F0F8FF'},

        // I added this
        {className: 'Other', IdentifiedType: 'Other', colorGroup: 'Other', color: '#C0C0C0'},
        {className: 'Generic', IdentifiedType: 'Other', colorGroup: 'Other', color: '#C0C0C0'},


    ];

    return out
}