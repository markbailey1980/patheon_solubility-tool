/*
	tech options array order
	0 - Lipids
	1 - Micronization
	2 - Nano-Milling
	3 - Dispersions - HME
	4 - Dispersions - Spray Dry
	5 - Dispersions - Coated Beads
	6 - Complexes
	7 - Amorphous
*/

var unitDoseResults1 = [
	["Y","G","G","G","Y","Y","G","Y"],
	["Y","Y","Y","Y","Y","G","Y","Y"],
	["G","G","G","Y","Y","R","G","Y"]
];

var lipidsResults = [
	{s:"211111",c:"Y"},
	{s:"211112",c:"Y"},
	{s:"211121",c:"Y"},
	{s:"211122",c:"Y"},
	{s:"211131",c:"R"},
	{s:"211132",c:"R"},
	{s:"211211",c:"G"},
	{s:"211212",c:"G"},
	{s:"211221",c:"Y"},
	{s:"211222",c:"Y"},
	{s:"211231",c:"R"},
	{s:"211232",c:"R"},
	{s:"211311",c:"G"},
	{s:"211312",c:"G"},
	{s:"211321",c:"G"},
	{s:"211322",c:"G"},
	{s:"211331",c:"Y"},
	{s:"211332",c:"Y"},
	{s:"212111",c:"Y"},
	{s:"212112",c:"Y"},
	{s:"212121",c:"Y"},
	{s:"212122",c:"Y"},
	{s:"212131",c:"R"},
	{s:"212132",c:"R"},
	{s:"212211",c:"G"},
	{s:"212212",c:"G"},
	{s:"212221",c:"Y"},
	{s:"212222",c:"Y"},
	{s:"212231",c:"R"},
	{s:"212232",c:"Y"},
	{s:"212311",c:"G"},
	{s:"212312",c:"G"},
	{s:"212321",c:"G"},
	{s:"212322",c:"G"},
	{s:"212331",c:"Y"},
	{s:"212332",c:"Y"},
	{s:"213111",c:"Y"},
	{s:"213112",c:"Y"},
	{s:"213121",c:"Y"},
	{s:"213122",c:"Y"},
	{s:"213131",c:"R"},
	{s:"213132",c:"R"},
	{s:"213211",c:"G"},
	{s:"213212",c:"G"},
	{s:"213221",c:"G"},
	{s:"213222",c:"G"},
	{s:"213231",c:"R"},
	{s:"213232",c:"Y"},
	{s:"213311",c:"G"},
	{s:"213312",c:"G"},
	{s:"213321",c:"G"},
	{s:"213322",c:"G"},
	{s:"213331",c:"Y"},
	{s:"213332",c:"Y"},
	{s:"221111",c:"Y"},
	{s:"221112",c:"Y"},
	{s:"221121",c:"R"},
	{s:"221122",c:"R"},
	{s:"221131",c:"R"},
	{s:"221132",c:"R"},
	{s:"221211",c:"G"},
	{s:"221212",c:"G"},
	{s:"221221",c:"Y"},
	{s:"221222",c:"Y"},
	{s:"221231",c:"R"},
	{s:"221232",c:"R"},
	{s:"221311",c:"G"},
	{s:"221312",c:"G"},
	{s:"221321",c:"G"},
	{s:"221322",c:"G"},
	{s:"221331",c:"Y"},
	{s:"221332",c:"Y"},
	{s:"222111",c:"Y"},
	{s:"222112",c:"Y"},
	{s:"222121",c:"R"},
	{s:"222122",c:"R"},
	{s:"222131",c:"R"},
	{s:"222132",c:"R"},
	{s:"222211",c:"G"},
	{s:"222212",c:"G"},
	{s:"222221",c:"Y"},
	{s:"222222",c:"Y"},
	{s:"222231",c:"R"},
	{s:"222232",c:"Y"},
	{s:"222311",c:"G"},
	{s:"222312",c:"G"},
	{s:"222321",c:"G"},
	{s:"222322",c:"G"},
	{s:"222331",c:"Y"},
	{s:"222332",c:"Y"},
	{s:"223111",c:"Y"},
	{s:"223112",c:"Y"},
	{s:"223121",c:"R"},
	{s:"223122",c:"R"},
	{s:"223131",c:"R"},
	{s:"223132",c:"R"},
	{s:"223211",c:"G"},
	{s:"223212",c:"G"},
	{s:"223221",c:"G"},
	{s:"223222",c:"G"},
	{s:"223231",c:"R"},
	{s:"223232",c:"Y"},
	{s:"223311",c:"G"},
	{s:"223312",c:"G"},
	{s:"223321",c:"G"},
	{s:"223322",c:"G"},
	{s:"223331",c:"Y"},
	{s:"223332",c:"Y"},
	{s:"231111",c:"Y"},
	{s:"231112",c:"Y"},
	{s:"231121",c:"R"},
	{s:"231122",c:"R"},
	{s:"231131",c:"R"},
	{s:"231132",c:"R"},
	{s:"231211",c:"G"},
	{s:"231212",c:"G"},
	{s:"231221",c:"R"},
	{s:"231222",c:"R"},
	{s:"231231",c:"R"},
	{s:"231232",c:"R"},
	{s:"231311",c:"G"},
	{s:"231312",c:"G"},
	{s:"231321",c:"Y"},
	{s:"231322",c:"Y"},
	{s:"231331",c:"Y"},
	{s:"231332",c:"Y"},
	{s:"232111",c:"Y"},
	{s:"232112",c:"Y"},
	{s:"232121",c:"R"},
	{s:"232122",c:"R"},
	{s:"232131",c:"R"},
	{s:"232132",c:"R"},
	{s:"232211",c:"G"},
	{s:"232212",c:"G"},
	{s:"232221",c:"R"},
	{s:"232222",c:"R"},
	{s:"232231",c:"R"},
	{s:"232232",c:"R"},
	{s:"232311",c:"G"},
	{s:"232312",c:"G"},
	{s:"232321",c:"G"},
	{s:"232322",c:"G"},
	{s:"232331",c:"Y"},
	{s:"232332",c:"Y"},
	{s:"233111",c:"Y"},
	{s:"233112",c:"Y"},
	{s:"233121",c:"R"},
	{s:"233122",c:"R"},
	{s:"233131",c:"R"},
	{s:"233132",c:"R"},
	{s:"233211",c:"G"},
	{s:"233212",c:"G"},
	{s:"233221",c:"Y"},
	{s:"233222",c:"Y"},
	{s:"233231",c:"R"},
	{s:"233232",c:"Y"},
	{s:"233311",c:"G"},
	{s:"233312",c:"G"},
	{s:"233321",c:"G"},
	{s:"233322",c:"G"},
	{s:"233331",c:"Y"},
	{s:"233332",c:"Y"}
];

var micronizationResults = [
	{s:"211111",c:"Y"},
	{s:"211112",c:"Y"},
	{s:"211121",c:"G"},
	{s:"211122",c:"G"},
	{s:"211131",c:"G"},
	{s:"211132",c:"G"},
	{s:"211211",c:"R"},
	{s:"211212",c:"R"},
	{s:"211221",c:"G"},
	{s:"211222",c:"G"},
	{s:"211231",c:"G"},
	{s:"211232",c:"G"},
	{s:"211311",c:"R"},
	{s:"211312",c:"R"},
	{s:"211321",c:"Y"},
	{s:"211322",c:"Y"},
	{s:"211331",c:"Y"},
	{s:"211332",c:"Y"},
	{s:"212111",c:"Y"},
	{s:"212112",c:"Y"},
	{s:"212121",c:"G"},
	{s:"212122",c:"G"},
	{s:"212131",c:"G"},
	{s:"212132",c:"G"},
	{s:"212211",c:"R"},
	{s:"212212",c:"R"},
	{s:"212221",c:"G"},
	{s:"212222",c:"G"},
	{s:"212231",c:"G"},
	{s:"212232",c:"G"},
	{s:"212311",c:"R"},
	{s:"212312",c:"R"},
	{s:"212321",c:"Y"},
	{s:"212322",c:"Y"},
	{s:"212331",c:"Y"},
	{s:"212332",c:"Y"},
	{s:"213111",c:"Y"},
	{s:"213112",c:"Y"},
	{s:"213121",c:"G"},
	{s:"213122",c:"G"},
	{s:"213131",c:"G"},
	{s:"213132",c:"G"},
	{s:"213211",c:"R"},
	{s:"213212",c:"R"},
	{s:"213221",c:"G"},
	{s:"213222",c:"G"},
	{s:"213231",c:"G"},
	{s:"213232",c:"G"},
	{s:"213311",c:"R"},
	{s:"213312",c:"R"},
	{s:"213321",c:"Y"},
	{s:"213322",c:"Y"},
	{s:"213331",c:"Y"},
	{s:"213332",c:"Y"},
	{s:"221111",c:"Y"},
	{s:"221112",c:"Y"},
	{s:"221121",c:"G"},
	{s:"221122",c:"G"},
	{s:"221131",c:"G"},
	{s:"221132",c:"G"},
	{s:"221211",c:"R"},
	{s:"221212",c:"R"},
	{s:"221221",c:"G"},
	{s:"221222",c:"G"},
	{s:"221231",c:"G"},
	{s:"221232",c:"G"},
	{s:"221311",c:"R"},
	{s:"221312",c:"R"},
	{s:"221321",c:"Y"},
	{s:"221322",c:"Y"},
	{s:"221331",c:"Y"},
	{s:"221332",c:"Y"},
	{s:"222111",c:"Y"},
	{s:"222112",c:"Y"},
	{s:"222121",c:"G"},
	{s:"222122",c:"G"},
	{s:"222131",c:"G"},
	{s:"222132",c:"G"},
	{s:"222211",c:"R"},
	{s:"222212",c:"R"},
	{s:"222221",c:"G"},
	{s:"222222",c:"G"},
	{s:"222231",c:"G"},
	{s:"222232",c:"G"},
	{s:"222311",c:"R"},
	{s:"222312",c:"R"},
	{s:"222321",c:"Y"},
	{s:"222322",c:"Y"},
	{s:"222331",c:"Y"},
	{s:"222332",c:"Y"},
	{s:"223111",c:"Y"},
	{s:"223112",c:"Y"},
	{s:"223121",c:"G"},
	{s:"223122",c:"G"},
	{s:"223131",c:"G"},
	{s:"223132",c:"G"},
	{s:"223211",c:"R"},
	{s:"223212",c:"R"},
	{s:"223221",c:"G"},
	{s:"223222",c:"G"},
	{s:"223231",c:"G"},
	{s:"223232",c:"G"},
	{s:"223311",c:"R"},
	{s:"223312",c:"R"},
	{s:"223321",c:"Y"},
	{s:"223322",c:"Y"},
	{s:"223331",c:"Y"},
	{s:"223332",c:"Y"},
	{s:"231111",c:"Y"},
	{s:"231112",c:"Y"},
	{s:"231121",c:"G"},
	{s:"231122",c:"G"},
	{s:"231131",c:"G"},
	{s:"231132",c:"G"},
	{s:"231211",c:"R"},
	{s:"231212",c:"R"},
	{s:"231221",c:"G"},
	{s:"231222",c:"G"},
	{s:"231231",c:"G"},
	{s:"231232",c:"G"},
	{s:"231311",c:"R"},
	{s:"231312",c:"R"},
	{s:"231321",c:"R"},
	{s:"231322",c:"R"},
	{s:"231331",c:"R"},
	{s:"231332",c:"R"},
	{s:"232111",c:"Y"},
	{s:"232112",c:"Y"},
	{s:"232121",c:"G"},
	{s:"232122",c:"G"},
	{s:"232131",c:"G"},
	{s:"232132",c:"G"},
	{s:"232211",c:"R"},
	{s:"232212",c:"R"},
	{s:"232221",c:"G"},
	{s:"232222",c:"G"},
	{s:"232231",c:"G"},
	{s:"232232",c:"G"},
	{s:"232311",c:"R"},
	{s:"232312",c:"R"},
	{s:"232321",c:"R"},
	{s:"232322",c:"R"},
	{s:"232331",c:"R"},
	{s:"232332",c:"R"},
	{s:"233111",c:"Y"},
	{s:"233112",c:"Y"},
	{s:"233121",c:"G"},
	{s:"233122",c:"G"},
	{s:"233131",c:"G"},
	{s:"233132",c:"G"},
	{s:"233211",c:"R"},
	{s:"233212",c:"R"},
	{s:"233221",c:"G"},
	{s:"233222",c:"G"},
	{s:"233231",c:"G"},
	{s:"233232",c:"G"},
	{s:"233311",c:"R"},
	{s:"233312",c:"R"},
	{s:"233321",c:"R"},
	{s:"233322",c:"R"},
	{s:"233331",c:"R"},
	{s:"233332",c:"R"}
];

var nanoMillingResults = [
	{s:"211111",c:"Y"},
	{s:"211112",c:"Y"},
	{s:"211121",c:"G"},
	{s:"211122",c:"G"},
	{s:"211131",c:"G"},
	{s:"211132",c:"G"},
	{s:"211211",c:"R"},
	{s:"211212",c:"R"},
	{s:"211221",c:"G"},
	{s:"211222",c:"G"},
	{s:"211231",c:"G"},
	{s:"211232",c:"G"},
	{s:"211311",c:"G"},
	{s:"211312",c:"G"},
	{s:"211321",c:"Y"},
	{s:"211322",c:"Y"},
	{s:"211331",c:"Y"},
	{s:"211332",c:"Y"},
	{s:"212111",c:"Y"},
	{s:"212112",c:"Y"},
	{s:"212121",c:"G"},
	{s:"212122",c:"G"},
	{s:"212131",c:"G"},
	{s:"212132",c:"G"},
	{s:"212211",c:"R"},
	{s:"212212",c:"R"},
	{s:"212221",c:"G"},
	{s:"212222",c:"G"},
	{s:"212231",c:"G"},
	{s:"212232",c:"G"},
	{s:"212311",c:"G"},
	{s:"212312",c:"G"},
	{s:"212321",c:"Y"},
	{s:"212322",c:"Y"},
	{s:"212331",c:"Y"},
	{s:"212332",c:"Y"},
	{s:"213111",c:"Y"},
	{s:"213112",c:"Y"},
	{s:"213121",c:"G"},
	{s:"213122",c:"G"},
	{s:"213131",c:"G"},
	{s:"213132",c:"G"},
	{s:"213211",c:"R"},
	{s:"213212",c:"R"},
	{s:"213221",c:"G"},
	{s:"213222",c:"G"},
	{s:"213231",c:"G"},
	{s:"213232",c:"G"},
	{s:"213311",c:"G"},
	{s:"213312",c:"G"},
	{s:"213321",c:"Y"},
	{s:"213322",c:"Y"},
	{s:"213331",c:"Y"},
	{s:"213332",c:"Y"},
	{s:"221111",c:"Y"},
	{s:"221112",c:"Y"},
	{s:"221121",c:"G"},
	{s:"221122",c:"G"},
	{s:"221131",c:"G"},
	{s:"221132",c:"G"},
	{s:"221211",c:"R"},
	{s:"221212",c:"R"},
	{s:"221221",c:"G"},
	{s:"221222",c:"G"},
	{s:"221231",c:"G"},
	{s:"221232",c:"G"},
	{s:"221311",c:"G"},
	{s:"221312",c:"G"},
	{s:"221321",c:"Y"},
	{s:"221322",c:"Y"},
	{s:"221331",c:"Y"},
	{s:"221332",c:"Y"},
	{s:"222111",c:"Y"},
	{s:"222112",c:"Y"},
	{s:"222121",c:"G"},
	{s:"222122",c:"G"},
	{s:"222131",c:"G"},
	{s:"222132",c:"G"},
	{s:"222211",c:"R"},
	{s:"222212",c:"R"},
	{s:"222221",c:"G"},
	{s:"222222",c:"G"},
	{s:"222231",c:"G"},
	{s:"222232",c:"G"},
	{s:"222311",c:"G"},
	{s:"222312",c:"G"},
	{s:"222321",c:"Y"},
	{s:"222322",c:"Y"},
	{s:"222331",c:"Y"},
	{s:"222332",c:"Y"},
	{s:"223111",c:"Y"},
	{s:"223112",c:"Y"},
	{s:"223121",c:"G"},
	{s:"223122",c:"G"},
	{s:"223131",c:"G"},
	{s:"223132",c:"G"},
	{s:"223211",c:"R"},
	{s:"223212",c:"R"},
	{s:"223221",c:"G"},
	{s:"223222",c:"G"},
	{s:"223231",c:"G"},
	{s:"223232",c:"G"},
	{s:"223311",c:"G"},
	{s:"223312",c:"G"},
	{s:"223321",c:"Y"},
	{s:"223322",c:"Y"},
	{s:"223331",c:"Y"},
	{s:"223332",c:"Y"},
	{s:"231111",c:"Y"},
	{s:"231112",c:"Y"},
	{s:"231121",c:"R"},
	{s:"231122",c:"R"},
	{s:"231131",c:"R"},
	{s:"231132",c:"R"},
	{s:"231211",c:"Y"},
	{s:"231212",c:"Y"},
	{s:"231221",c:"R"},
	{s:"231222",c:"R"},
	{s:"231231",c:"R"},
	{s:"231232",c:"R"},
	{s:"231311",c:"Y"},
	{s:"231312",c:"Y"},
	{s:"231321",c:"R"},
	{s:"231322",c:"R"},
	{s:"231331",c:"R"},
	{s:"231332",c:"R"},
	{s:"232111",c:"Y"},
	{s:"232112",c:"Y"},
	{s:"232121",c:"R"},
	{s:"232122",c:"R"},
	{s:"232131",c:"R"},
	{s:"232132",c:"R"},
	{s:"232211",c:"Y"},
	{s:"232212",c:"Y"},
	{s:"232221",c:"R"},
	{s:"232222",c:"R"},
	{s:"232231",c:"R"},
	{s:"232232",c:"R"},
	{s:"232311",c:"Y"},
	{s:"232312",c:"Y"},
	{s:"232321",c:"R"},
	{s:"232322",c:"R"},
	{s:"232331",c:"R"},
	{s:"232332",c:"R"},
	{s:"233111",c:"Y"},
	{s:"233112",c:"Y"},
	{s:"233121",c:"R"},
	{s:"233122",c:"R"},
	{s:"233131",c:"R"},
	{s:"233132",c:"R"},
	{s:"233211",c:"Y"},
	{s:"233212",c:"Y"},
	{s:"233221",c:"R"},
	{s:"233222",c:"R"},
	{s:"233231",c:"R"},
	{s:"233232",c:"R"},
	{s:"233311",c:"Y"},
	{s:"233312",c:"Y"},
	{s:"233321",c:"R"},
	{s:"233322",c:"R"},
	{s:"233331",c:"R"},
	{s:"233332",c:"R"}
];

var dispHMEResults = [
	{s:"211111",c:"Y"},
	{s:"211112",c:"Y"},
	{s:"211121",c:"R"},
	{s:"211122",c:"R"},
	{s:"211131",c:"R"},
	{s:"211132",c:"R"},
	{s:"211211",c:"Y"},
	{s:"211212",c:"Y"},
	{s:"211221",c:"Y"},
	{s:"211222",c:"Y"},
	{s:"211231",c:"R"},
	{s:"211232",c:"R"},
	{s:"211311",c:"G"},
	{s:"211312",c:"G"},
	{s:"211321",c:"G"},
	{s:"211322",c:"G"},
	{s:"211331",c:"R"},
	{s:"211332",c:"R"},
	{s:"212111",c:"G"},
	{s:"212112",c:"G"},
	{s:"212121",c:"R"},
	{s:"212122",c:"R"},
	{s:"212131",c:"R"},
	{s:"212132",c:"R"},
	{s:"212211",c:"G"},
	{s:"212212",c:"G"},
	{s:"212221",c:"G"},
	{s:"212222",c:"G"},
	{s:"212231",c:"R"},
	{s:"212232",c:"R"},
	{s:"212311",c:"G"},
	{s:"212312",c:"G"},
	{s:"212321",c:"G"},
	{s:"212322",c:"G"},
	{s:"212331",c:"R"},
	{s:"212332",c:"R"},
	{s:"213111",c:"G"},
	{s:"213112",c:"G"},
	{s:"213121",c:"Y"},
	{s:"213122",c:"Y"},
	{s:"213131",c:"R"},
	{s:"213132",c:"R"},
	{s:"213211",c:"G"},
	{s:"213212",c:"G"},
	{s:"213221",c:"G"},
	{s:"213222",c:"G"},
	{s:"213231",c:"R"},
	{s:"213232",c:"R"},
	{s:"213311",c:"G"},
	{s:"213312",c:"G"},
	{s:"213321",c:"G"},
	{s:"213322",c:"G"},
	{s:"213331",c:"R"},
	{s:"213332",c:"R"},
	{s:"221111",c:"Y"},
	{s:"221112",c:"Y"},
	{s:"221121",c:"R"},
	{s:"221122",c:"R"},
	{s:"221131",c:"R"},
	{s:"221132",c:"R"},
	{s:"221211",c:"Y"},
	{s:"221212",c:"Y"},
	{s:"221221",c:"Y"},
	{s:"221222",c:"Y"},
	{s:"221231",c:"R"},
	{s:"221232",c:"R"},
	{s:"221311",c:"Y"},
	{s:"221312",c:"Y"},
	{s:"221321",c:"Y"},
	{s:"221322",c:"Y"},
	{s:"221331",c:"R"},
	{s:"221332",c:"R"},
	{s:"222111",c:"G"},
	{s:"222112",c:"G"},
	{s:"222121",c:"R"},
	{s:"222122",c:"R"},
	{s:"222131",c:"R"},
	{s:"222132",c:"R"},
	{s:"222211",c:"G"},
	{s:"222212",c:"G"},
	{s:"222221",c:"G"},
	{s:"222222",c:"G"},
	{s:"222231",c:"R"},
	{s:"222232",c:"R"},
	{s:"222311",c:"G"},
	{s:"222312",c:"G"},
	{s:"222321",c:"G"},
	{s:"222322",c:"G"},
	{s:"222331",c:"R"},
	{s:"222332",c:"R"},
	{s:"223111",c:"G"},
	{s:"223112",c:"G"},
	{s:"223121",c:"Y"},
	{s:"223122",c:"Y"},
	{s:"223131",c:"R"},
	{s:"223132",c:"R"},
	{s:"223211",c:"G"},
	{s:"223212",c:"G"},
	{s:"223221",c:"G"},
	{s:"223222",c:"G"},
	{s:"223231",c:"R"},
	{s:"223232",c:"R"},
	{s:"223311",c:"G"},
	{s:"223312",c:"G"},
	{s:"223321",c:"G"},
	{s:"223322",c:"G"},
	{s:"223331",c:"R"},
	{s:"223332",c:"R"},
	{s:"231111",c:"G"},
	{s:"231112",c:"G"},
	{s:"231121",c:"R"},
	{s:"231122",c:"R"},
	{s:"231131",c:"R"},
	{s:"231132",c:"R"},
	{s:"231211",c:"G"},
	{s:"231212",c:"G"},
	{s:"231221",c:"Y"},
	{s:"231222",c:"Y"},
	{s:"231231",c:"R"},
	{s:"231232",c:"R"},
	{s:"231311",c:"G"},
	{s:"231312",c:"G"},
	{s:"231321",c:"Y"},
	{s:"231322",c:"Y"},
	{s:"231331",c:"R"},
	{s:"231332",c:"R"},
	{s:"232111",c:"G"},
	{s:"232112",c:"G"},
	{s:"232121",c:"R"},
	{s:"232122",c:"R"},
	{s:"232131",c:"R"},
	{s:"232132",c:"R"},
	{s:"232211",c:"G"},
	{s:"232212",c:"G"},
	{s:"232221",c:"Y"},
	{s:"232222",c:"Y"},
	{s:"232231",c:"R"},
	{s:"232232",c:"R"},
	{s:"232311",c:"G"},
	{s:"232312",c:"G"},
	{s:"232321",c:"Y"},
	{s:"232322",c:"Y"},
	{s:"232331",c:"R"},
	{s:"232332",c:"R"},
	{s:"233111",c:"G"},
	{s:"233112",c:"G"},
	{s:"233121",c:"Y"},
	{s:"233122",c:"Y"},
	{s:"233131",c:"R"},
	{s:"233132",c:"R"},
	{s:"233211",c:"G"},
	{s:"233212",c:"G"},
	{s:"233221",c:"G"},
	{s:"233222",c:"G"},
	{s:"233231",c:"R"},
	{s:"233232",c:"R"},
	{s:"233311",c:"G"},
	{s:"233312",c:"G"},
	{s:"233321",c:"G"},
	{s:"233322",c:"G"},
	{s:"233331",c:"R"},
	{s:"233332",c:"R"}
];

var dispSprayDryResults = [
	{s:"211111",c:"Y"},
	{s:"211112",c:"Y"},
	{s:"211121",c:"R"},
	{s:"211122",c:"Y"},
	{s:"211131",c:"R"},
	{s:"211132",c:"R"},
	{s:"211211",c:"R"},
	{s:"211212",c:"Y"},
	{s:"211221",c:"R"},
	{s:"211222",c:"Y"},
	{s:"211231",c:"R"},
	{s:"211232",c:"R"},
	{s:"211311",c:"R"},
	{s:"211312",c:"Y"},
	{s:"211321",c:"R"},
	{s:"211322",c:"Y"},
	{s:"211331",c:"R"},
	{s:"211332",c:"Y"},
	{s:"212111",c:"Y"},
	{s:"212112",c:"Y"},
	{s:"212121",c:"Y"},
	{s:"212122",c:"Y"},
	{s:"212131",c:"R"},
	{s:"212132",c:"R"},
	{s:"212211",c:"G"},
	{s:"212212",c:"G"},
	{s:"212221",c:"G"},
	{s:"212222",c:"G"},
	{s:"212231",c:"Y"},
	{s:"212232",c:"Y"},
	{s:"212311",c:"G"},
	{s:"212312",c:"G"},
	{s:"212321",c:"G"},
	{s:"212322",c:"G"},
	{s:"212331",c:"G"},
	{s:"212332",c:"G"},
	{s:"213111",c:"Y"},
	{s:"213112",c:"Y"},
	{s:"213121",c:"Y"},
	{s:"213122",c:"Y"},
	{s:"213131",c:"Y"},
	{s:"213132",c:"Y"},
	{s:"213211",c:"G"},
	{s:"213212",c:"G"},
	{s:"213221",c:"G"},
	{s:"213222",c:"G"},
	{s:"213231",c:"G"},
	{s:"213232",c:"G"},
	{s:"213311",c:"G"},
	{s:"213312",c:"G"},
	{s:"213321",c:"G"},
	{s:"213322",c:"G"},
	{s:"213331",c:"G"},
	{s:"213332",c:"G"},
	{s:"221111",c:"R"},
	{s:"221112",c:"R"},
	{s:"221121",c:"R"},
	{s:"221122",c:"R"},
	{s:"221131",c:"R"},
	{s:"221132",c:"R"},
	{s:"221211",c:"R"},
	{s:"221212",c:"Y"},
	{s:"221221",c:"R"},
	{s:"221222",c:"Y"},
	{s:"221231",c:"R"},
	{s:"221232",c:"R"},
	{s:"221311",c:"R"},
	{s:"221312",c:"Y"},
	{s:"221321",c:"R"},
	{s:"221322",c:"Y"},
	{s:"221331",c:"R"},
	{s:"221332",c:"Y"},
	{s:"222111",c:"G"},
	{s:"222112",c:"G"},
	{s:"222121",c:"Y"},
	{s:"222122",c:"Y"},
	{s:"222131",c:"Y"},
	{s:"222132",c:"Y"},
	{s:"222211",c:"G"},
	{s:"222212",c:"G"},
	{s:"222221",c:"G"},
	{s:"222222",c:"G"},
	{s:"222231",c:"Y"},
	{s:"222232",c:"Y"},
	{s:"222311",c:"G"},
	{s:"222312",c:"G"},
	{s:"222321",c:"G"},
	{s:"222322",c:"G"},
	{s:"222331",c:"G"},
	{s:"222332",c:"G"},
	{s:"223111",c:"G"},
	{s:"223112",c:"G"},
	{s:"223121",c:"G"},
	{s:"223122",c:"G"},
	{s:"223131",c:"G"},
	{s:"223132",c:"G"},
	{s:"223211",c:"G"},
	{s:"223212",c:"G"},
	{s:"223221",c:"G"},
	{s:"223222",c:"G"},
	{s:"223231",c:"G"},
	{s:"223232",c:"G"},
	{s:"223311",c:"G"},
	{s:"223312",c:"G"},
	{s:"223321",c:"G"},
	{s:"223322",c:"G"},
	{s:"223331",c:"G"},
	{s:"223332",c:"G"},
	{s:"231111",c:"R"},
	{s:"231112",c:"R"},
	{s:"231121",c:"R"},
	{s:"231122",c:"R"},
	{s:"231131",c:"R"},
	{s:"231132",c:"R"},
	{s:"231211",c:"R"},
	{s:"231212",c:"Y"},
	{s:"231221",c:"R"},
	{s:"231222",c:"Y"},
	{s:"231231",c:"R"},
	{s:"231232",c:"R"},
	{s:"231311",c:"R"},
	{s:"231312",c:"Y"},
	{s:"231321",c:"R"},
	{s:"231322",c:"Y"},
	{s:"231331",c:"R"},
	{s:"231332",c:"Y"},
	{s:"232111",c:"G"},
	{s:"232112",c:"G"},
	{s:"232121",c:"G"},
	{s:"232122",c:"G"},
	{s:"232131",c:"Y"},
	{s:"232132",c:"Y"},
	{s:"232211",c:"G"},
	{s:"232212",c:"G"},
	{s:"232221",c:"G"},
	{s:"232222",c:"G"},
	{s:"232231",c:"Y"},
	{s:"232232",c:"Y"},
	{s:"232311",c:"G"},
	{s:"232312",c:"G"},
	{s:"232321",c:"G"},
	{s:"232322",c:"G"},
	{s:"232331",c:"G"},
	{s:"232332",c:"G"},
	{s:"233111",c:"G"},
	{s:"233112",c:"G"},
	{s:"233121",c:"G"},
	{s:"233122",c:"G"},
	{s:"233131",c:"G"},
	{s:"233132",c:"G"},
	{s:"233211",c:"G"},
	{s:"233212",c:"G"},
	{s:"233221",c:"G"},
	{s:"233222",c:"G"},
	{s:"233231",c:"G"},
	{s:"233232",c:"G"},
	{s:"233311",c:"G"},
	{s:"233312",c:"G"},
	{s:"233321",c:"G"},
	{s:"233322",c:"G"},
	{s:"233331",c:"G"},
	{s:"233332",c:"G"}
];

var dispCoatedBeadsResults = [
	{s:"211111",c:"Y"},
	{s:"211112",c:"Y"},
	{s:"211121",c:"Y"},
	{s:"211122",c:"Y"},
	{s:"211131",c:"R"},
	{s:"211132",c:"R"},
	{s:"211211",c:"Y"},
	{s:"211212",c:"Y"},
	{s:"211221",c:"Y"},
	{s:"211222",c:"Y"},
	{s:"211231",c:"Y"},
	{s:"211232",c:"Y"},
	{s:"211311",c:"G"},
	{s:"211312",c:"G"},
	{s:"211321",c:"G"},
	{s:"211322",c:"G"},
	{s:"211331",c:"G"},
	{s:"211332",c:"G"},
	{s:"212111",c:"G"},
	{s:"212112",c:"G"},
	{s:"212121",c:"G"},
	{s:"212122",c:"G"},
	{s:"212131",c:"G"},
	{s:"212132",c:"G"},
	{s:"212211",c:"G"},
	{s:"212212",c:"G"},
	{s:"212221",c:"G"},
	{s:"212222",c:"G"},
	{s:"212231",c:"G"},
	{s:"212232",c:"G"},
	{s:"212311",c:"G"},
	{s:"212312",c:"G"},
	{s:"212321",c:"G"},
	{s:"212322",c:"G"},
	{s:"212331",c:"G"},
	{s:"212332",c:"G"},
	{s:"213111",c:"G"},
	{s:"213112",c:"G"},
	{s:"213121",c:"G"},
	{s:"213122",c:"G"},
	{s:"213131",c:"G"},
	{s:"213132",c:"G"},
	{s:"213211",c:"G"},
	{s:"213212",c:"G"},
	{s:"213221",c:"G"},
	{s:"213222",c:"G"},
	{s:"213231",c:"G"},
	{s:"213232",c:"G"},
	{s:"213311",c:"G"},
	{s:"213312",c:"G"},
	{s:"213321",c:"G"},
	{s:"213322",c:"G"},
	{s:"213331",c:"G"},
	{s:"213332",c:"G"},
	{s:"221111",c:"R"},
	{s:"221112",c:"R"},
	{s:"221121",c:"R"},
	{s:"221122",c:"R"},
	{s:"221131",c:"R"},
	{s:"221132",c:"R"},
	{s:"221211",c:"R"},
	{s:"221212",c:"R"},
	{s:"221221",c:"R"},
	{s:"221222",c:"R"},
	{s:"221231",c:"R"},
	{s:"221232",c:"R"},
	{s:"221311",c:"R"},
	{s:"221312",c:"R"},
	{s:"221321",c:"R"},
	{s:"221322",c:"R"},
	{s:"221331",c:"R"},
	{s:"221332",c:"R"},
	{s:"222111",c:"R"},
	{s:"222112",c:"Y"},
	{s:"222121",c:"R"},
	{s:"222122",c:"Y"},
	{s:"222131",c:"R"},
	{s:"222132",c:"Y"},
	{s:"222211",c:"R"},
	{s:"222212",c:"Y"},
	{s:"222221",c:"R"},
	{s:"222222",c:"Y"},
	{s:"222231",c:"R"},
	{s:"222232",c:"Y"},
	{s:"222311",c:"R"},
	{s:"222312",c:"Y"},
	{s:"222321",c:"R"},
	{s:"222322",c:"Y"},
	{s:"222331",c:"R"},
	{s:"222332",c:"Y"},
	{s:"223111",c:"R"},
	{s:"223112",c:"Y"},
	{s:"223121",c:"R"},
	{s:"223122",c:"Y"},
	{s:"223131",c:"R"},
	{s:"223132",c:"Y"},
	{s:"223211",c:"R"},
	{s:"223212",c:"Y"},
	{s:"223221",c:"R"},
	{s:"223222",c:"Y"},
	{s:"223231",c:"R"},
	{s:"223232",c:"Y"},
	{s:"223311",c:"R"},
	{s:"223312",c:"Y"},
	{s:"223321",c:"R"},
	{s:"223322",c:"Y"},
	{s:"223331",c:"R"},
	{s:"223332",c:"Y"},
	{s:"231111",c:"R"},
	{s:"231112",c:"R"},
	{s:"231121",c:"R"},
	{s:"231122",c:"R"},
	{s:"231131",c:"R"},
	{s:"231132",c:"R"},
	{s:"231211",c:"R"},
	{s:"231212",c:"R"},
	{s:"231221",c:"R"},
	{s:"231222",c:"R"},
	{s:"231231",c:"R"},
	{s:"231232",c:"R"},
	{s:"231311",c:"R"},
	{s:"231312",c:"R"},
	{s:"231321",c:"R"},
	{s:"231322",c:"R"},
	{s:"231331",c:"R"},
	{s:"231332",c:"R"},
	{s:"232111",c:"R"},
	{s:"232112",c:"R"},
	{s:"232121",c:"R"},
	{s:"232122",c:"R"},
	{s:"232131",c:"R"},
	{s:"232132",c:"R"},
	{s:"232211",c:"R"},
	{s:"232212",c:"R"},
	{s:"232221",c:"R"},
	{s:"232222",c:"R"},
	{s:"232231",c:"R"},
	{s:"232232",c:"R"},
	{s:"232311",c:"R"},
	{s:"232312",c:"R"},
	{s:"232321",c:"R"},
	{s:"232322",c:"R"},
	{s:"232331",c:"R"},
	{s:"232332",c:"R"},
	{s:"233111",c:"R"},
	{s:"233112",c:"R"},
	{s:"233121",c:"R"},
	{s:"233122",c:"R"},
	{s:"233131",c:"R"},
	{s:"233132",c:"R"},
	{s:"233211",c:"R"},
	{s:"233212",c:"R"},
	{s:"233221",c:"R"},
	{s:"233222",c:"R"},
	{s:"233231",c:"R"},
	{s:"233232",c:"R"},
	{s:"233311",c:"R"},
	{s:"233312",c:"R"},
	{s:"233321",c:"R"},
	{s:"233322",c:"R"},
	{s:"233331",c:"R"},
	{s:"233332",c:"R"}
];

var amorphousResults = [
	{s:"211111",c:"Y"},
	{s:"211112",c:"Y"},
	{s:"211121",c:"R"},
	{s:"211122",c:"R"},
	{s:"211131",c:"R"},
	{s:"211132",c:"R"},
	{s:"211211",c:"G"},
	{s:"211212",c:"G"},
	{s:"211221",c:"G"},
	{s:"211222",c:"G"},
	{s:"211231",c:"R"},
	{s:"211232",c:"R"},
	{s:"211311",c:"G"},
	{s:"211312",c:"G"},
	{s:"211321",c:"G"},
	{s:"211322",c:"G"},
	{s:"211331",c:"Y"},
	{s:"211332",c:"Y"},
	{s:"212111",c:"Y"},
	{s:"212112",c:"Y"},
	{s:"212121",c:"R"},
	{s:"212122",c:"R"},
	{s:"212131",c:"R"},
	{s:"212132",c:"R"},
	{s:"212211",c:"G"},
	{s:"212212",c:"G"},
	{s:"212221",c:"G"},
	{s:"212222",c:"G"},
	{s:"212231",c:"R"},
	{s:"212232",c:"R"},
	{s:"212311",c:"G"},
	{s:"212312",c:"G"},
	{s:"212321",c:"G"},
	{s:"212322",c:"G"},
	{s:"212331",c:"Y"},
	{s:"212332",c:"Y"},
	{s:"213111",c:"Y"},
	{s:"213112",c:"Y"},
	{s:"213121",c:"R"},
	{s:"213122",c:"R"},
	{s:"213131",c:"R"},
	{s:"213132",c:"R"},
	{s:"213211",c:"G"},
	{s:"213212",c:"G"},
	{s:"213221",c:"G"},
	{s:"213222",c:"G"},
	{s:"213231",c:"R"},
	{s:"213232",c:"R"},
	{s:"213311",c:"G"},
	{s:"213312",c:"G"},
	{s:"213321",c:"G"},
	{s:"213322",c:"G"},
	{s:"213331",c:"Y"},
	{s:"213332",c:"Y"},
	{s:"221111",c:"Y"},
	{s:"221112",c:"Y"},
	{s:"221121",c:"R"},
	{s:"221122",c:"R"},
	{s:"221131",c:"R"},
	{s:"221132",c:"R"},
	{s:"221211",c:"G"},
	{s:"221212",c:"G"},
	{s:"221221",c:"G"},
	{s:"221222",c:"G"},
	{s:"221231",c:"R"},
	{s:"221232",c:"R"},
	{s:"221311",c:"G"},
	{s:"221312",c:"G"},
	{s:"221321",c:"G"},
	{s:"221322",c:"G"},
	{s:"221331",c:"Y"},
	{s:"221332",c:"Y"},
	{s:"222111",c:"Y"},
	{s:"222112",c:"Y"},
	{s:"222121",c:"R"},
	{s:"222122",c:"R"},
	{s:"222131",c:"R"},
	{s:"222132",c:"R"},
	{s:"222211",c:"G"},
	{s:"222212",c:"G"},
	{s:"222221",c:"G"},
	{s:"222222",c:"G"},
	{s:"222231",c:"R"},
	{s:"222232",c:"R"},
	{s:"222311",c:"G"},
	{s:"222312",c:"G"},
	{s:"222321",c:"G"},
	{s:"222322",c:"G"},
	{s:"222331",c:"Y"},
	{s:"222332",c:"Y"},
	{s:"223111",c:"Y"},
	{s:"223112",c:"Y"},
	{s:"223121",c:"R"},
	{s:"223122",c:"R"},
	{s:"223131",c:"R"},
	{s:"223132",c:"R"},
	{s:"223211",c:"G"},
	{s:"223212",c:"G"},
	{s:"223221",c:"G"},
	{s:"223222",c:"G"},
	{s:"223231",c:"R"},
	{s:"223232",c:"R"},
	{s:"223311",c:"G"},
	{s:"223312",c:"G"},
	{s:"223321",c:"G"},
	{s:"223322",c:"G"},
	{s:"223331",c:"Y"},
	{s:"223332",c:"Y"},
	{s:"231111",c:"R"},
	{s:"231112",c:"R"},
	{s:"231121",c:"R"},
	{s:"231122",c:"R"},
	{s:"231131",c:"R"},
	{s:"231132",c:"R"},
	{s:"231211",c:"Y"},
	{s:"231212",c:"Y"},
	{s:"231221",c:"Y"},
	{s:"231222",c:"Y"},
	{s:"231231",c:"R"},
	{s:"231232",c:"R"},
	{s:"231311",c:"G"},
	{s:"231312",c:"G"},
	{s:"231321",c:"G"},
	{s:"231322",c:"G"},
	{s:"231331",c:"Y"},
	{s:"231332",c:"Y"},
	{s:"232111",c:"R"},
	{s:"232112",c:"R"},
	{s:"232121",c:"R"},
	{s:"232122",c:"R"},
	{s:"232131",c:"R"},
	{s:"232132",c:"R"},
	{s:"232211",c:"Y"},
	{s:"232212",c:"Y"},
	{s:"232221",c:"Y"},
	{s:"232222",c:"Y"},
	{s:"232231",c:"R"},
	{s:"232232",c:"R"},
	{s:"232311",c:"G"},
	{s:"232312",c:"G"},
	{s:"232321",c:"G"},
	{s:"232322",c:"G"},
	{s:"232331",c:"Y"},
	{s:"232332",c:"Y"},
	{s:"233111",c:"R"},
	{s:"233112",c:"R"},
	{s:"233121",c:"R"},
	{s:"233122",c:"R"},
	{s:"233131",c:"R"},
	{s:"233132",c:"R"},
	{s:"233211",c:"Y"},
	{s:"233212",c:"Y"},
	{s:"233221",c:"Y"},
	{s:"233222",c:"Y"},
	{s:"233231",c:"R"},
	{s:"233232",c:"R"},
	{s:"233311",c:"G"},
	{s:"233312",c:"G"},
	{s:"233321",c:"G"},
	{s:"233322",c:"G"},
	{s:"233331",c:"Y"},
	{s:"233332",c:"Y"}
];

var complexesResults = [
	{s:"211111",c:"Y"},
	{s:"211112",c:"Y"},
	{s:"211121",c:"Y"},
	{s:"211122",c:"Y"},
	{s:"211131",c:"R"},
	{s:"211132",c:"R"},
	{s:"211211",c:"Y"},
	{s:"211212",c:"Y"},
	{s:"211221",c:"Y"},
	{s:"211222",c:"Y"},
	{s:"211231",c:"Y"},
	{s:"211232",c:"Y"},
	{s:"211311",c:"Y"},
	{s:"211312",c:"Y"},
	{s:"211321",c:"Y"},
	{s:"211322",c:"Y"},
	{s:"211331",c:"Y"},
	{s:"211332",c:"Y"},
	{s:"212111",c:"Y"},
	{s:"212112",c:"Y"},
	{s:"212121",c:"Y"},
	{s:"212122",c:"Y"},
	{s:"212131",c:"R"},
	{s:"212132",c:"R"},
	{s:"212211",c:"Y"},
	{s:"212212",c:"Y"},
	{s:"212221",c:"Y"},
	{s:"212222",c:"Y"},
	{s:"212231",c:"Y"},
	{s:"212232",c:"Y"},
	{s:"212311",c:"G"},
	{s:"212312",c:"G"},
	{s:"212321",c:"G"},
	{s:"212322",c:"G"},
	{s:"212331",c:"G"},
	{s:"212332",c:"G"},
	{s:"213111",c:"Y"},
	{s:"213112",c:"Y"},
	{s:"213121",c:"Y"},
	{s:"213122",c:"Y"},
	{s:"213131",c:"R"},
	{s:"213132",c:"R"},
	{s:"213211",c:"Y"},
	{s:"213212",c:"Y"},
	{s:"213221",c:"Y"},
	{s:"213222",c:"Y"},
	{s:"213231",c:"Y"},
	{s:"213232",c:"Y"},
	{s:"213311",c:"G"},
	{s:"213312",c:"G"},
	{s:"213321",c:"G"},
	{s:"213322",c:"G"},
	{s:"213331",c:"G"},
	{s:"213332",c:"G"},
	{s:"221111",c:"R"},
	{s:"221112",c:"R"},
	{s:"221121",c:"R"},
	{s:"221122",c:"R"},
	{s:"221131",c:"R"},
	{s:"221132",c:"R"},
	{s:"221211",c:"R"},
	{s:"221212",c:"R"},
	{s:"221221",c:"R"},
	{s:"221222",c:"R"},
	{s:"221231",c:"R"},
	{s:"221232",c:"R"},
	{s:"221311",c:"R"},
	{s:"221312",c:"R"},
	{s:"221321",c:"R"},
	{s:"221322",c:"R"},
	{s:"221331",c:"R"},
	{s:"221332",c:"R"},
	{s:"222111",c:"R"},
	{s:"222112",c:"R"},
	{s:"222121",c:"R"},
	{s:"222122",c:"R"},
	{s:"222131",c:"R"},
	{s:"222132",c:"R"},
	{s:"222211",c:"R"},
	{s:"222212",c:"R"},
	{s:"222221",c:"R"},
	{s:"222222",c:"R"},
	{s:"222231",c:"R"},
	{s:"222232",c:"R"},
	{s:"222311",c:"R"},
	{s:"222312",c:"R"},
	{s:"222321",c:"R"},
	{s:"222322",c:"R"},
	{s:"222331",c:"R"},
	{s:"222332",c:"R"},
	{s:"223111",c:"R"},
	{s:"223112",c:"R"},
	{s:"223121",c:"R"},
	{s:"223122",c:"R"},
	{s:"223131",c:"R"},
	{s:"223132",c:"R"},
	{s:"223211",c:"R"},
	{s:"223212",c:"R"},
	{s:"223221",c:"R"},
	{s:"223222",c:"R"},
	{s:"223231",c:"R"},
	{s:"223232",c:"R"},
	{s:"223311",c:"R"},
	{s:"223312",c:"R"},
	{s:"223321",c:"R"},
	{s:"223322",c:"R"},
	{s:"223331",c:"R"},
	{s:"223332",c:"R"},
	{s:"231111",c:"R"},
	{s:"231112",c:"R"},
	{s:"231121",c:"R"},
	{s:"231122",c:"R"},
	{s:"231131",c:"R"},
	{s:"231132",c:"R"},
	{s:"231211",c:"R"},
	{s:"231212",c:"R"},
	{s:"231221",c:"R"},
	{s:"231222",c:"R"},
	{s:"231231",c:"R"},
	{s:"231232",c:"R"},
	{s:"231311",c:"R"},
	{s:"231312",c:"R"},
	{s:"231321",c:"R"},
	{s:"231322",c:"R"},
	{s:"231331",c:"R"},
	{s:"231332",c:"R"},
	{s:"232111",c:"R"},
	{s:"232112",c:"R"},
	{s:"232121",c:"R"},
	{s:"232122",c:"R"},
	{s:"232131",c:"R"},
	{s:"232132",c:"R"},
	{s:"232211",c:"R"},
	{s:"232212",c:"R"},
	{s:"232221",c:"R"},
	{s:"232222",c:"R"},
	{s:"232231",c:"R"},
	{s:"232232",c:"R"},
	{s:"232311",c:"R"},
	{s:"232312",c:"R"},
	{s:"232321",c:"R"},
	{s:"232322",c:"R"},
	{s:"232331",c:"R"},
	{s:"232332",c:"R"},
	{s:"233111",c:"R"},
	{s:"233112",c:"R"},
	{s:"233121",c:"R"},
	{s:"233122",c:"R"},
	{s:"233131",c:"R"},
	{s:"233132",c:"R"},
	{s:"233211",c:"R"},
	{s:"233212",c:"R"},
	{s:"233221",c:"R"},
	{s:"233222",c:"R"},
	{s:"233231",c:"R"},
	{s:"233232",c:"R"},
	{s:"233311",c:"R"},
	{s:"233312",c:"R"},
	{s:"233321",c:"R"},
	{s:"233322",c:"R"},
	{s:"233331",c:"R"},
	{s:"233332",c:"R"}
];

$(document).ready(function(){
	$("#js-get-unit-dose").on("click", getUnitDose);
	$("#js-get-full-results").on("click", getFullResults);
});

function getUnitDose() {
	if (App.q1 === true) {
		var doseResults = unitDoseResults1[$("#unit-dose li.active").data('dose-num')];
		var results = $('section').find('.results article.single-result');
		console.log('doseResults = ' + doseResults);

		console.log('data num = ' + $("#unit-dose li.active").data('dose-num'));
		$.each(results, function() {
			var dataNum = $(this).data('num');
			$(this).attr('data-color',doseResults[dataNum]);
		});
	}
}

function getFullResults() {
	if (App.q2 === true) {

		var results = $('section').find('.results article.single-result');
		// get current selections as a 6-digit string
		var unitDose = $("#unit-dose li.active").data('dose-num') + 1;
		var selections = "2" + unitDose + $("#aqueous-solubility li.active").data('dose-num') + $("#logp li.active").data('dose-num') + $("#melting-point li.active").data('dose-num') + $("#permeability li.active").data('dose-num');
		var colors = [];
		colors[0] = findColorForTechOption(lipidsResults, selections);
		colors[1] = findColorForTechOption(micronizationResults, selections);
		colors[2] = findColorForTechOption(nanoMillingResults, selections);
		colors[3] = findColorForTechOption(dispHMEResults, selections);
		colors[4] = findColorForTechOption(dispSprayDryResults, selections);
		colors[5] = findColorForTechOption(dispCoatedBeadsResults, selections);
		colors[6] = findColorForTechOption(complexesResults, selections);
		colors[7] = findColorForTechOption(amorphousResults, selections);

		console.log('selections = ' + selections);
		console.log('colors = ' + colors);

		$.each(results, function() {
			var dataNum = $(this).data('num');
			$(this).attr('data-color',colors[dataNum]);
		});
	}
}

function findColorForTechOption(resultsArray, selections) {
	var result = "E";
	var len = resultsArray.length;
	for(i = 0; i < len; i++) {
		if(resultsArray[i].s == selections) {
			result = resultsArray[i].c;
			return result;
		}
	}
	return result;
}