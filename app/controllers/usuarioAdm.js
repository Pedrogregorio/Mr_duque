let agente_banco = {}
let status_banco = {}
let usuario_banco = {}

const excel = require('exceljs')

const bancos = [
   {
     "id": "001",
     "name": "BANCO DO BRASIL",
     "Document": "00.000.000/0001-91",
     "CreatedAt": "2017-04-19 15:52:42.400",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "341",
     "name": "ITAÚ",
     "CreatedAt": "2017-04-19 15:53:59.107",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "104",
     "name": "CAIXA ECONÔMICA FEDERAL",
     "CreatedAt": "2017-04-19 15:54:41.200",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "033",
     "name": "BANCO SANTANDER S.A.",
     "CreatedAt": "2017-04-19 15:55:59.197",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "070",
     "name": "BRB - BANCO DE BRASÍLIA",
     "CreatedAt": "2017-04-19 15:58:17.387",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "077",
     "name": "BANCO INTER",
     "Document": "00.416.968/0001-01",
     "CreatedAt": "2017-04-19 15:58:39.887",
     "UpdatedAt": "2020-04-29 11:08:00.000",
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "237",
     "name": "BRADESCO",
     "CreatedAt": "2017-04-19 16:00:31.407",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "745",
     "name": "CITIBANK",
     "CreatedAt": "2017-04-19 16:01:50.353",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "422",
     "name": "BANCO SAFRA",
     "CreatedAt": "2017-04-19 16:04:20.790",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "399",
     "name": "BANCO HSBC",
     "CreatedAt": "2017-04-19 16:05:20.353",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "756",
     "name": "BANCOOB",
     "CreatedAt": "2017-08-01 22:29:11.827",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "212",
     "name": "BANCO ORIGINAL",
     "CreatedAt": "2017-10-11 20:33:06.803",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "002",
     "name": "BANCO CENTRAL DO BRASIL",
     "CreatedAt": "2018-01-29 15:12:24.270",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "003",
     "name": "BANCO DA AMAZONIA S.A",
     "CreatedAt": "2018-01-29 15:12:24.270",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "004",
     "name": "BANCO DO NORDESTE DO BRASIL S.A",
     "CreatedAt": "2018-01-29 15:12:24.270",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "007",
     "name": "BANCO NAC DESENV. ECO. SOCIAL S.A",
     "CreatedAt": "2018-01-29 15:12:24.270",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "008",
     "name": "BANCO MERIDIONAL DO BRASIL",
     "CreatedAt": "2018-01-29 15:12:24.270",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "020",
     "name": "BANCO DO ESTADO DE ALAGOAS S.A",
     "CreatedAt": "2018-01-29 15:12:24.270",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "021",
     "name": "BANCO DO ESTADO DO ESPIRITO SANTO S.A",
     "CreatedAt": "2018-01-29 15:12:24.270",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "022",
     "name": "BANCO DE CREDITO REAL DE MINAS GERAIS SA",
     "CreatedAt": "2018-01-29 15:12:24.273",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "024",
     "name": "BANCO DO ESTADO DE PERNAMBUCO",
     "CreatedAt": "2018-01-29 15:12:24.273",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "025",
     "name": "BANCO ALFA S/A",
     "CreatedAt": "2018-01-29 15:12:24.273",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "026",
     "name": "BANCO DO ESTADO DO ACRE S.A",
     "CreatedAt": "2018-01-29 15:12:24.273",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "027",
     "name": "BANCO DO ESTADO DE SANTA CATARINA S.A",
     "CreatedAt": "2018-01-29 15:12:24.273",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "028",
     "name": "BANCO DO ESTADO DA BAHIA S.A",
     "CreatedAt": "2018-01-29 15:12:24.277",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "029",
     "name": "BANCO DO ESTADO DO RIO DE JANEIRO S.A",
     "CreatedAt": "2018-01-29 15:12:24.277",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "030",
     "name": "BANCO DO ESTADO DA PARAIBA S.A",
     "CreatedAt": "2018-01-29 15:12:24.277",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "031",
     "name": "BANCO DO ESTADO DE GOIAS S.A",
     "CreatedAt": "2018-01-29 15:12:24.277",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "032",
     "name": "BANCO DO ESTADO DO MATO GROSSO S.A.",
     "CreatedAt": "2018-01-29 15:12:24.277",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "034",
     "name": "BANCO DO ESADO DO AMAZONAS S.A",
     "CreatedAt": "2018-01-29 15:12:24.280",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "035",
     "name": "BANCO DO ESTADO DO CEARA S.A",
     "CreatedAt": "2018-01-29 15:12:24.280",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "036",
     "name": "BANCO DO ESTADO DO MARANHAO S.A",
     "CreatedAt": "2018-01-29 15:12:24.280",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "037",
     "name": "BANCO DO ESTADO DO PARA S.A",
     "CreatedAt": "2018-01-29 15:12:24.280",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "038",
     "name": "BANCO DO ESTADO DO PARANA S.A",
     "CreatedAt": "2018-01-29 15:12:24.280",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "039",
     "name": "BANCO DO ESTADO DO PIAUI S.A",
     "CreatedAt": "2018-01-29 15:12:24.280",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "041",
     "name": "BANCO DO ESTADO DO RIO GRANDE DO SUL S.A",
     "CreatedAt": "2018-01-29 15:12:24.283",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "047",
     "name": "BANCO DO ESTADO DE SERGIPE S.A",
     "CreatedAt": "2018-01-29 15:12:24.283",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "048",
     "name": "BANCO DO ESTADO DE MINAS GERAIS S.A",
     "CreatedAt": "2018-01-29 15:12:24.283",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "059",
     "name": "BANCO DO ESTADO DE RONDONIA S.A",
     "CreatedAt": "2018-01-29 15:12:24.283",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "106",
     "name": "BANCO ITABANCO S.A.",
     "CreatedAt": "2018-01-29 15:12:24.287",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "107",
     "name": "BANCO BBM S.A",
     "CreatedAt": "2018-01-29 15:12:24.287",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "109",
     "name": "BANCO CREDIBANCO S.A",
     "CreatedAt": "2018-01-29 15:12:24.290",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "116",
     "name": "BANCO B.N.L DO BRASIL S.A",
     "CreatedAt": "2018-01-29 15:12:24.290",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "148",
     "name": "MULTI BANCO S.A",
     "CreatedAt": "2018-01-29 15:12:24.290",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "151",
     "name": "CAIXA ECONOMICA DO ESTADO DE SAO PAULO",
     "CreatedAt": "2018-01-29 15:12:24.290",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "153",
     "name": "CAIXA ECONOMICA DO ESTADO DO R.G.SUL",
     "CreatedAt": "2018-01-29 15:12:24.290",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "165",
     "name": "BANCO NORCHEM S.A",
     "CreatedAt": "2018-01-29 15:12:24.290",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "166",
     "name": "BANCO INTER-ATLANTICO S.A",
     "CreatedAt": "2018-01-29 15:12:24.293",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "168",
     "name": "BANCO C.C.F. BRASIL S.A",
     "CreatedAt": "2018-01-29 15:12:24.293",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "175",
     "name": "CONTINENTAL BANCO S.A",
     "CreatedAt": "2018-01-29 15:12:24.293",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "184",
     "name": "BBA - CREDITANSTALT S.A",
     "CreatedAt": "2018-01-29 15:12:24.293",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "199",
     "name": "BANCO FINANCIAL PORTUGUES",
     "CreatedAt": "2018-01-29 15:12:24.293",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "200",
     "name": "BANCO FRICRISA AXELRUD S.A",
     "CreatedAt": "2018-01-29 15:12:24.297",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "201",
     "name": "BANCO AUGUSTA INDUSTRIA E COMERCIAL S.A",
     "CreatedAt": "2018-01-29 15:12:24.297",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "204",
     "name": "BANCO S.R.L S.A",
     "CreatedAt": "2018-01-29 15:12:24.297",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "205",
     "name": "BANCO SUL AMERICA S.A",
     "CreatedAt": "2018-01-29 15:12:24.297",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "206",
     "name": "BANCO MARTINELLI S.A",
     "CreatedAt": "2018-01-29 15:12:24.297",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "208",
     "name": "BANCO PACTUAL S.A",
     "CreatedAt": "2018-01-29 15:12:24.300",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "210",
     "name": "DEUTSCH SUDAMERIKANICHE BANK AG",
     "CreatedAt": "2018-01-29 15:12:24.300",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "211",
     "name": "BANCO SISTEMA S.A",
     "CreatedAt": "2018-01-29 15:12:24.300",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "213",
     "name": "BANCO ARBI S.A",
     "CreatedAt": "2018-01-29 15:12:24.300",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "214",
     "name": "BANCO DIBENS S.A",
     "CreatedAt": "2018-01-29 15:12:24.303",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "215",
     "name": "BANCO AMERICA DO SUL S.A",
     "CreatedAt": "2018-01-29 15:12:24.303",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "216",
     "name": "BANCO REGIONAL MALCON S.A",
     "CreatedAt": "2018-01-29 15:12:24.303",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "217",
     "name": "BANCO AGROINVEST S.A",
     "CreatedAt": "2018-01-29 15:12:24.303",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "218",
     "name": "BS2",
    "Document": "71.027.866/0001-34",
     "CreatedAt": "2018-01-29 15:12:24.303",
     "UpdatedAt": "2019-05-21 08:14:51.000",
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "219",
     "name": "BANCO DE CREDITO DE SAO PAULO S.A",
     "CreatedAt": "2018-01-29 15:12:24.307",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "220",
     "name": "BANCO CREFISUL",
     "CreatedAt": "2018-01-29 15:12:24.307",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "221",
     "name": "BANCO GRAPHUS S.A",
     "CreatedAt": "2018-01-29 15:12:24.307",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "222",
     "name": "BANCO AGF BRASIL S. A.",
     "CreatedAt": "2018-01-29 15:12:24.307",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "223",
     "name": "BANCO INTERUNION S.A",
     "CreatedAt": "2018-01-29 15:12:24.307",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "224",
     "name": "BANCO FIBRA S.A",
     "CreatedAt": "2018-01-29 15:12:24.307",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "225",
     "name": "BANCO BRASCAN S.A",
     "CreatedAt": "2018-01-29 15:12:24.310",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "228",
     "name": "BANCO ICATU S.A",
     "CreatedAt": "2018-01-29 15:12:24.310",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "229",
     "name": "BANCO CRUZEIRO S.A",
     "CreatedAt": "2018-01-29 15:12:24.310",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "230",
     "name": "BANCO BANDEIRANTES S.A",
     "CreatedAt": "2018-01-29 15:12:24.310",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "231",
     "name": "BANCO BOAVISTA S.A",
     "CreatedAt": "2018-01-29 15:12:24.310",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "232",
     "name": "BANCO INTERPART S.A",
     "CreatedAt": "2018-01-29 15:12:24.310",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "233",
     "name": "BANCO MAPPIN S.A",
     "CreatedAt": "2018-01-29 15:12:24.313",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "234",
     "name": "BANCO LAVRA S.A.",
     "CreatedAt": "2018-01-29 15:12:24.313",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "235",
     "name": "BANCO LIBERAL S.A",
     "CreatedAt": "2018-01-29 15:12:24.313",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "236",
     "name": "BANCO CAMBIAL S.A",
     "CreatedAt": "2018-01-29 15:12:24.313",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "239",
     "name": "BANCO BANCRED S.A",
     "CreatedAt": "2018-01-29 15:12:24.317",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "240",
     "name": "BANCO DE CREDITO REAL DE MINAS GERAIS S.",
     "CreatedAt": "2018-01-29 15:12:24.317",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "241",
     "name": "BANCO CLASSICO S.A",
     "CreatedAt": "2018-01-29 15:12:24.317",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "242",
     "name": "BANCO EUROINVEST S.A",
     "CreatedAt": "2018-01-29 15:12:24.317",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "243",
     "name": "BANCO MÁXIMA S.A",
     "Document": "33.923.798/0001-00",
     "CreatedAt": "2018-01-29 15:12:24.317",
     "UpdatedAt": "2020-03-20 17:00:00.000",
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "244",
     "name": "BANCO CIDADE S.A",
     "CreatedAt": "2018-01-29 15:12:24.320",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "245",
     "name": "BANCO EMPRESARIAL S.A",
     "CreatedAt": "2018-01-29 15:12:24.320",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "246",
     "name": "BANCO ABC ROMA S.A",
     "CreatedAt": "2018-01-29 15:12:24.320",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "247",
     "name": "BANCO OMEGA S.A",
     "CreatedAt": "2018-01-29 15:12:24.320",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "249",
     "name": "BANCO INVESTCRED S.A",
     "CreatedAt": "2018-01-29 15:12:24.320",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "250",
     "name": "BANCO SCHAHIN CURY S.A",
     "CreatedAt": "2018-01-29 15:12:24.320",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "251",
     "name": "BANCO SAO JORGE S.A.",
     "CreatedAt": "2018-01-29 15:12:24.323",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "252",
     "name": "BANCO FININVEST S.A",
     "CreatedAt": "2018-01-29 15:12:24.323",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "254",
     "name": "BANCO PARANA BANCO S.A",
     "CreatedAt": "2018-01-29 15:12:24.323",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "255",
     "name": "MILBANCO S.A.",
     "CreatedAt": "2018-01-29 15:12:24.323",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "256",
     "name": "BANCO GULVINVEST S.A",
     "CreatedAt": "2018-01-29 15:12:24.323",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "258",
     "name": "BANCO INDUSCRED S.A",
     "CreatedAt": "2018-01-29 15:12:24.327",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "261",
     "name": "BANCO VARIG S.A",
     "CreatedAt": "2018-01-29 15:12:24.327",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "262",
     "name": "BANCO BOREAL S.A",
     "CreatedAt": "2018-01-29 15:12:24.327",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "263",
     "name": "BANCO CACIQUE",
     "CreatedAt": "2018-01-29 15:12:24.327",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "264",
     "name": "BANCO PERFORMANCE S.A",
     "CreatedAt": "2018-01-29 15:12:24.330",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "265",
     "name": "BANCO FATOR S.A",
     "CreatedAt": "2018-01-29 15:12:24.330",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "266",
     "name": "BANCO CEDULA S.A",
     "CreatedAt": "2018-01-29 15:12:24.330",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "267",
     "name": "BANCO BBM-COM.C.IMOB.CFI S.A.",
     "CreatedAt": "2018-01-29 15:12:24.330",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "275",
     "name": "BANCO REAL S.A",
     "CreatedAt": "2018-01-29 15:12:24.330",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "277",
     "name": "BANCO PLANIBANC S.A",
     "CreatedAt": "2018-01-29 15:12:24.330",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "282",
     "name": "BANCO BRASILEIRO COMERCIAL",
     "CreatedAt": "2018-01-29 15:12:24.330",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "291",
     "name": "BANCO DE CREDITO NACIONAL S.A",
     "CreatedAt": "2018-01-29 15:12:24.333",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "294",
     "name": "BCR - BANCO DE CREDITO REAL S.A",
     "CreatedAt": "2018-01-29 15:12:24.333",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "295",
     "name": "BANCO CREDIPLAN S.A",
     "CreatedAt": "2018-01-29 15:12:24.333",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "300",
     "name": "BANCO DE LA NACION ARGENTINA S.A",
     "CreatedAt": "2018-01-29 15:12:24.333",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "302",
     "name": "BANCO DO PROGRESSO S.A",
     "CreatedAt": "2018-01-29 15:12:24.337",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "303",
     "name": "BANCO HNF S.A.",
     "CreatedAt": "2018-01-29 15:12:24.337",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "304",
     "name": "BANCO PONTUAL S.A",
     "CreatedAt": "2018-01-29 15:12:24.337",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "308",
     "name": "BANCO COMERCIAL BANCESA S.A.",
     "CreatedAt": "2018-01-29 15:12:24.337",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "318",
     "name": "BANCO B.M.G. S.A",
     "CreatedAt": "2018-01-29 15:12:24.337",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "320",
     "name": "BANCO INDUSTRIAL E COMERCIAL",
     "CreatedAt": "2018-01-29 15:12:24.340",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "346",
     "name": "BANCO FRANCES E BRASILEIRO S.A",
     "CreatedAt": "2018-01-29 15:12:24.340",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "347",
     "name": "BANCO SUDAMERIS BRASIL S.A",
     "CreatedAt": "2018-01-29 15:12:24.340",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "351",
     "name": "BANCO BOZANO SIMONSEN S.A",
     "CreatedAt": "2018-01-29 15:12:24.340",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "353",
     "name": "BANCO GERAL DO COMERCIO S.A",
     "CreatedAt": "2018-01-29 15:12:24.340",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "356",
     "name": "ABN AMRO S.A",
     "CreatedAt": "2018-01-29 15:12:24.340",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "366",
     "name": "BANCO SOGERAL S.A",
     "CreatedAt": "2018-01-29 15:12:24.343",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "369",
     "name": "PONTUAL",
     "CreatedAt": "2018-01-29 15:12:24.343",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "370",
     "name": "BEAL - BANCO EUROPEU PARA AMERICA LATINA",
     "CreatedAt": "2018-01-29 15:12:24.343",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "372",
     "name": "BANCO ITAMARATI S.A",
     "CreatedAt": "2018-01-29 15:12:24.347",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "375",
     "name": "BANCO FENICIA S.A",
     "CreatedAt": "2018-01-29 15:12:24.347",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "376",
     "name": "CHASE MANHATTAN BANK S.A",
     "CreatedAt": "2018-01-29 15:12:24.347",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "388",
     "name": "BANCO MERCANTIL DE DESCONTOS S/A",
     "CreatedAt": "2018-01-29 15:12:24.347",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "389",
     "name": "BANCO MERCANTIL DO BRASIL S.A",
     "CreatedAt": "2018-01-29 15:12:24.347",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "392",
     "name": "BANCO MERCANTIL DE SAO PAULO S.A",
     "CreatedAt": "2018-01-29 15:12:24.350",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "394",
     "name": "BANCO B.M.C. S.A",
     "CreatedAt": "2018-01-29 15:12:24.350",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "409",
     "name": "UNIBANCO - UNIAO DOS BANCOS BRASILEIROS",
     "CreatedAt": "2018-01-29 15:12:24.350",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "412",
     "name": "BANCO NACIONAL DA BAHIA S.A",
     "CreatedAt": "2018-01-29 15:12:24.350",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "415",
     "name": "BANCO NACIONAL S.A",
     "CreatedAt": "2018-01-29 15:12:24.350",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "420",
     "name": "BANCO NACIONAL DO NORTE S.A",
     "CreatedAt": "2018-01-29 15:12:24.350",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "424",
     "name": "BANCO NOROESTE S.A",
     "CreatedAt": "2018-01-29 15:12:24.353",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "434",
     "name": "BANCO FORTALEZA S.A",
     "CreatedAt": "2018-01-29 15:12:24.353",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "453",
     "name": "BANCO RURAL S.A",
     "CreatedAt": "2018-01-29 15:12:24.353",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "456",
     "name": "BANCO TOKIO S.A",
     "CreatedAt": "2018-01-29 15:12:24.353",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "464",
     "name": "BANCO SUMITOMO BRASILEIRO S.A",
     "CreatedAt": "2018-01-29 15:12:24.357",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "466",
     "name": "BANCO MITSUBISHI BRASILEIRO S.A",
     "CreatedAt": "2018-01-29 15:12:24.357",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "472",
     "name": "LLOYDS BANK PLC",
     "CreatedAt": "2018-01-29 15:12:24.357",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "473",
     "name": "BANCO FINANCIAL PORTUGUES S.A",
     "CreatedAt": "2018-01-29 15:12:24.357",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "477",
     "name": "CITIBANK N.A",
     "CreatedAt": "2018-01-29 15:12:24.357",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "479",
     "name": "BANCO DE BOSTON S.A",
     "CreatedAt": "2018-01-29 15:12:24.360",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "480",
     "name": "BANCO PORTUGUES DO ATLANTICO-BRASIL S.A",
     "CreatedAt": "2018-01-29 15:12:24.360",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "483",
     "name": "BANCO AGRIMISA S.A.",
     "CreatedAt": "2018-01-29 15:12:24.360",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "487",
     "name": "DEUTSCHE BANK S.A - BANCO ALEMAO",
     "CreatedAt": "2018-01-29 15:12:24.360",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "488",
     "name": "BANCO J. P. MORGAN S.A",
     "CreatedAt": "2018-01-29 15:12:24.360",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "489",
     "name": "BANESTO BANCO URUGAUAY S.A",
     "CreatedAt": "2018-01-29 15:12:24.360",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "492",
     "name": "INTERNATIONALE NEDERLANDEN BANK N.V.",
     "CreatedAt": "2018-01-29 15:12:24.363",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "493",
     "name": "BANCO UNION S.A.C.A",
     "CreatedAt": "2018-01-29 15:12:24.363",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "494",
     "name": "BANCO LA REP. ORIENTAL DEL URUGUAY",
     "CreatedAt": "2018-01-29 15:12:24.363",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "495",
     "name": "BANCO LA PROVINCIA DE BUENOS AIRES",
     "CreatedAt": "2018-01-29 15:12:24.363",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "496",
     "name": "BANCO EXTERIOR DE ESPANA S.A",
     "CreatedAt": "2018-01-29 15:12:24.363",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "498",
     "name": "CENTRO HISPANO BANCO",
     "CreatedAt": "2018-01-29 15:12:24.367",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "499",
     "name": "BANCO IOCHPE S.A",
     "CreatedAt": "2018-01-29 15:12:24.367",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "501",
     "name": "BANCO BRASILEIRO IRAQUIANO S.A.",
     "CreatedAt": "2018-01-29 15:12:24.367",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "502",
     "name": "BANCO SANTANDER DE NEGOCIOS S.A",
     "CreatedAt": "2018-01-29 15:12:24.367",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "504",
     "name": "BANCO MULTIPLIC S.A",
     "CreatedAt": "2018-01-29 15:12:24.367",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "505",
     "name": "BANCO GARANTIA S.A",
     "CreatedAt": "2018-01-29 15:12:24.370",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "600",
     "name": "BANCO LUSO BRASILEIRO S.A",
     "CreatedAt": "2018-01-29 15:12:24.370",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "601",
     "name": "BFC BANCO S.A.",
     "CreatedAt": "2018-01-29 15:12:24.370",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "602",
     "name": "BANCO PATENTE S.A",
     "CreatedAt": "2018-01-29 15:12:24.370",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "604",
     "name": "BANCO INDUSTRIAL DO BRASIL S.A",
     "CreatedAt": "2018-01-29 15:12:24.370",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "607",
     "name": "BANCO SANTOS NEVES S.A",
     "CreatedAt": "2018-01-29 15:12:24.373",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "608",
     "name": "BANCO OPEN S.A",
     "CreatedAt": "2018-01-29 15:12:24.373",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "610",
     "name": "BANCO V.R. S.A",
     "CreatedAt": "2018-01-29 15:12:24.373",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "611",
     "name": "BANCO PAULISTA S.A",
     "CreatedAt": "2018-01-29 15:12:24.373",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "612",
     "name": "BANCO GUANABARA S.A",
     "CreatedAt": "2018-01-29 15:12:24.377",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "613",
     "name": "BANCO PECUNIA S.A",
     "CreatedAt": "2018-01-29 15:12:24.377",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "616",
     "name": "BANCO INTERPACIFICO S.A",
     "CreatedAt": "2018-01-29 15:12:24.377",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "617",
     "name": "BANCO INVESTOR S.A.",
     "CreatedAt": "2018-01-29 15:12:24.377",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "618",
     "name": "BANCO TENDENCIA S.A",
     "CreatedAt": "2018-01-29 15:12:24.377",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "621",
     "name": "BANCO APLICAP S.A.",
     "CreatedAt": "2018-01-29 15:12:24.380",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "622",
     "name": "BANCO DRACMA S.A",
     "CreatedAt": "2018-01-29 15:12:24.380",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "623",
     "name": "BANCO PANAMERICANO S.A",
     "CreatedAt": "2018-01-29 15:12:24.380",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "624",
     "name": "BANCO GENERAL MOTORS S.A",
     "CreatedAt": "2018-01-29 15:12:24.380",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "625",
     "name": "BANCO ARAUCARIA S.A",
     "CreatedAt": "2018-01-29 15:12:24.380",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "626",
     "name": "BANCO FICSA S.A",
     "CreatedAt": "2018-01-29 15:12:24.380",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "627",
     "name": "BANCO DESTAK S.A",
     "CreatedAt": "2018-01-29 15:12:24.383",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "628",
     "name": "BANCO CRITERIUM S.A",
     "CreatedAt": "2018-01-29 15:12:24.383",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "629",
     "name": "BANCORP BANCO COML. E. DE INVESTMENTO",
     "CreatedAt": "2018-01-29 15:12:24.383",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "630",
     "name": "BANCO INTERCAP S.A",
     "CreatedAt": "2018-01-29 15:12:24.383",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "633",
     "name": "BANCO REDIMENTO S.A",
     "CreatedAt": "2018-01-29 15:12:24.383",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "634",
     "name": "BANCO TRIANGULO S.A",
     "CreatedAt": "2018-01-29 15:12:24.387",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "635",
     "name": "BANCO DO ESTADO DO AMAPA S.A",
     "CreatedAt": "2018-01-29 15:12:24.387",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "637",
     "name": "BANCO SOFISA S.A",
     "CreatedAt": "2018-01-29 15:12:24.387",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "638",
     "name": "BANCO PROSPER S.A",
     "CreatedAt": "2018-01-29 15:12:24.387",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "639",
     "name": "BIG S.A. - BANCO IRMAOS GUIMARAES",
     "CreatedAt": "2018-01-29 15:12:24.387",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "640",
     "name": "BANCO DE CREDITO METROPOLITANO S.A",
     "CreatedAt": "2018-01-29 15:12:24.390",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "641",
     "name": "BANCO EXCEL ECONOMICO S/A",
     "CreatedAt": "2018-01-29 15:12:24.390",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "643",
     "name": "BANCO SEGMENTO S.A",
     "CreatedAt": "2018-01-29 15:12:24.390",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "645",
     "name": "BANCO DO ESTADO DE RORAIMA S.A",
     "CreatedAt": "2018-01-29 15:12:24.390",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "647",
     "name": "BANCO MARKA S.A",
     "CreatedAt": "2018-01-29 15:12:24.390",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "648",
     "name": "BANCO ATLANTIS S.A",
     "CreatedAt": "2018-01-29 15:12:24.390",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "649",
     "name": "BANCO DIMENSAO S.A",
     "CreatedAt": "2018-01-29 15:12:24.390",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "650",
     "name": "BANCO PEBB S.A",
     "CreatedAt": "2018-01-29 15:12:24.393",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "652",
     "name": "BANCO FRANCES E BRASILEIRO SA",
     "CreatedAt": "2018-01-29 15:12:24.393",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "653",
     "name": "BANCO INDUSVAL S.A",
     "CreatedAt": "2018-01-29 15:12:24.393",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "654",
     "name": "BANCO A. J. RENNER S.A",
     "CreatedAt": "2018-01-29 15:12:24.393",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "655",
     "name": "BANCO VOTORANTIM S.A.",
     "CreatedAt": "2018-01-29 15:12:24.393",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "656",
     "name": "BANCO MATRIX S.A",
     "CreatedAt": "2018-01-29 15:12:24.397",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "657",
     "name": "BANCO TECNICORP S.A",
     "CreatedAt": "2018-01-29 15:12:24.397",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "658",
     "name": "BANCO PORTO REAL S.A",
     "CreatedAt": "2018-01-29 15:12:24.397",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "702",
     "name": "BANCO SANTOS S.A",
     "CreatedAt": "2018-01-29 15:12:24.397",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "705",
     "name": "BANCO INVESTCORP S.A.",
     "CreatedAt": "2018-01-29 15:12:24.400",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "707",
     "name": "BANCO DAYCOVAL S.A",
     "CreatedAt": "2018-01-29 15:12:24.400",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "711",
     "name": "BANCO VETOR S.A.",
     "CreatedAt": "2018-01-29 15:12:24.400",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "713",
     "name": "BANCO CINDAM S.A",
     "CreatedAt": "2018-01-29 15:12:24.400",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "715",
     "name": "BANCO VEGA S.A",
     "CreatedAt": "2018-01-29 15:12:24.400",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "718",
     "name": "BANCO OPERADOR S.A",
     "CreatedAt": "2018-01-29 15:12:24.400",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "719",
     "name": "BANCO PRIMUS S.A",
     "CreatedAt": "2018-01-29 15:12:24.400",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "720",
     "name": "BANCO MAXINVEST S.A",
     "CreatedAt": "2018-01-29 15:12:24.403",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "721",
     "name": "BANCO CREDIBEL S.A",
     "CreatedAt": "2018-01-29 15:12:24.403",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "722",
     "name": "BANCO INTERIOR DE SAO PAULO S.A",
     "CreatedAt": "2018-01-29 15:12:24.403",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "724",
     "name": "BANCO PORTO SEGURO S.A",
     "CreatedAt": "2018-01-29 15:12:24.403",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "725",
     "name": "BANCO FINABANCO S.A",
     "CreatedAt": "2018-01-29 15:12:24.407",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "726",
     "name": "BANCO UNIVERSAL S.A",
     "CreatedAt": "2018-01-29 15:12:24.407",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "728",
     "name": "BANCO FITAL S.A",
     "CreatedAt": "2018-01-29 15:12:24.407",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "729",
     "name": "BANCO FONTE S.A",
     "CreatedAt": "2018-01-29 15:12:24.407",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "730",
     "name": "BANCO COMERCIAL PARAGUAYO S.A",
     "CreatedAt": "2018-01-29 15:12:24.407",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "731",
     "name": "BANCO GNPP S.A.",
     "CreatedAt": "2018-01-29 15:12:24.410",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "732",
     "name": "BANCO PREMIER S.A.",
     "CreatedAt": "2018-01-29 15:12:24.410",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "733",
     "name": "BANCO NACOES S.A.",
     "CreatedAt": "2018-01-29 15:12:24.410",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "734",
     "name": "BANCO GERDAU S.A",
     "CreatedAt": "2018-01-29 15:12:24.410",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "735",
     "name": "BANCO NEON",
     "CreatedAt": "2018-01-29 15:12:24.410",
     "UpdatedAt": "2019-11-12 19:15:00.000",
     "DeletedAt": "2019-11-12 19:15:00.000",
     "IsDeleted": true
   },
   {
     "id": "736",
     "name": "BANCO UNITED S.A",
     "CreatedAt": "2018-01-29 15:12:24.410",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "737",
     "name": "THECA",
     "CreatedAt": "2018-01-29 15:12:24.413",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "738",
     "name": "MARADA",
     "CreatedAt": "2018-01-29 15:12:24.413",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "739",
     "name": "BGN",
     "CreatedAt": "2018-01-29 15:12:24.413",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "740",
     "name": "BCN BARCLAYS",
     "CreatedAt": "2018-01-29 15:12:24.413",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "741",
     "name": "BRP",
     "CreatedAt": "2018-01-29 15:12:24.413",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "742",
     "name": "EQUATORIAL",
     "CreatedAt": "2018-01-29 15:12:24.417",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "743",
     "name": "BANCO EMBLEMA S.A",
     "CreatedAt": "2018-01-29 15:12:24.417",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "744",
     "name": "THE FIRST NATIONAL BANK OF BOSTON",
     "CreatedAt": "2018-01-29 15:12:24.417",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "746",
     "name": "MODAL S.A.",
     "CreatedAt": "2018-01-29 15:12:24.417",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "747",
     "name": "RABOBANK DO BRASIL",
     "Document": "01.023.570/0001-60",
     "CreatedAt": "2018-01-29 15:12:24.420",
     "UpdatedAt": "2020-04-23 22:00:00.000",
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "748",
     "name": "SICREDI",
     "CreatedAt": "2018-01-29 15:12:24.420",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "749",
     "name": "BRMSANTIL SA",
     "CreatedAt": "2018-01-29 15:12:24.420",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "750",
     "name": "BANCO REPUBLIC NATIONAL OF NEW YORK (BRA",
     "CreatedAt": "2018-01-29 15:12:24.420",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "751",
     "name": "DRESDNER BANK LATEINAMERIKA-BRASIL S/A",
     "CreatedAt": "2018-01-29 15:12:24.420",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "752",
     "name": "BANCO BANQUE NATIONALE DE PARIS BRASIL S",
     "CreatedAt": "2018-01-29 15:12:24.420",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "753",
     "name": "BANCO COMERCIAL URUGUAI S.A.",
     "CreatedAt": "2018-01-29 15:12:24.423",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "755",
     "name": "BANCO MERRILL LYNCH S.A",
     "CreatedAt": "2018-01-29 15:12:24.423",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "757",
     "name": "BANCO KEB DO BRASIL S.A.",
     "CreatedAt": "2018-01-29 15:12:24.423",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "260",
     "name": "Nu Pagamentos S.A",
     "Document": "18.236.120/0001-58",
     "CreatedAt": "2018-01-29 16:47:35.153",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "102",
     "name": "XP INVESTIMENTOS",
     "CreatedAt": "2018-01-29 16:47:35.210",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "336",
     "name": "BANCO C6 S.A.",
     "Document": "31.872.495/0001-72",
     "CreatedAt": "2019-08-02 13:11:00.000",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "290",
     "name": "PagSeguro Internet S.A.",
     "Document": "08.561.701/0001-01",
     "CreatedAt": "2019-08-21 12:48:00.000",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "323",
     "name": "MercadoPago.com Representações Ltda.",
     "Document": "10.573.521/0001-91",
     "CreatedAt": "2019-09-13 15:23:00.000",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "332",
     "name": "Acesso Soluções de Pagamento S.A.",
     "Document": "13.140.088/0001-99",
     "CreatedAt": "2019-12-26 15:00:00.000",
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "325",
     "name": "Órama DTVM S.A.",
     "Document": "13.293.225/0001-25",
     "CreatedAt": "2020-01-15 19:27:00.000",    
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "85",
     "name": "COOPERATIVA CENTRAL DE CREDITO - AILOS",
     "Document": "05.463.212/0001-29",
     "CreatedAt": "2020-03-20 18:04:00.000",    
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "125",
     "name": "PLURAL S.A. BANCO MULTIPLO",
     "Document": "45.246.410/0001-55",
     "CreatedAt": "2020-03-20 18:13:00.000",    
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   },
   {
     "id": "197",
     "name": "STONE PAGAMENTOS S.A.",
     "Document": "16.501.555/0002-38",
     "CreatedAt": "2020-04-24 12:58:00.000",    
     "UpdatedAt": null,
     "DeletedAt": null,
     "IsDeleted": false
   }
 ]

function nomeBanco(result, id) {
   for (let j = 0; j < bancos.length; j++) {
       if(bancos[j].id == id){
           result.nome_banco = bancos[j].name
           return true
       }
   }    
}


function downloadExcel(res, customers, fields) {  
  const jsonCustomers = JSON.parse(JSON.stringify(customers));
  // console.log(jsonCustomers);
  /**
    [ { id: 1, address: 'Jack Smith', age: 23, name: 'Massachusetts' },
    { id: 2, address: 'Adam Johnson', age: 27, name: 'New York' },
    { id: 3, address: 'Katherin Carter', age: 26, name: 'Washington DC' },
    { id: 4, address: 'Jack London', age: 33, name: 'Nevada' },
    { id: 5, address: 'Jason Bourne', age: 36, name: 'California' } ]
  */
  
  let workbook = new excel.Workbook(); //creating workbook
  let worksheet = workbook.addWorksheet('Customers'); //creating worksheet
 
  //  WorkSheet Header
  worksheet.columns = [
    { header: 'Numero Proposta', key: 'numero_proposta', width: 10 },
    { header: 'Nome Cliente', key: 'nome_cliente', width: 30 },
    { header: 'CPF', key: 'cpf_cliente', width: 30},
    { header: 'Valor Proposta', key: 'valor_proposta', width: 30},
    { header: 'Valor Parcela', key: 'parcela_proposta', width: 30},
    { header: 'Banco Portado', key: 'nome_banco', width: 30},
    { header: 'Data Inclusao Proposta', key: 'data_inclusao', width: 30},
    { header: 'Agente Banco', key: 'nome_agente', width: 30},
    { header: 'Status Proposta', key: 'nome_status', width: 30}
  ];
 
  // Add Array Rows
  worksheet.addRows(jsonCustomers);
 
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader('Content-Disposition', 'attachment; filename=' + 'customer.xlsx');
  
  return workbook.xlsx.write(res)
        .then(function() {
              res.status(200).end()
        });
}


function allRejected(arr) {
  var contador = {}
  if (arr) {
    for (var item of arr) { 
      if (item) {
        if (contador[item.responsavel] === undefined) {
          contador[item.responsavel].prioridade = arr.filter(function(item2) {
            return item.responsavel === item2.responsavel
          }).length;
        }
      }
    }
  }
  return contador;
}


function autenticarUsuario(req, res) {
  if(req.session.autorizado !== true){
      var validacao = [{msg:"Usuario Nao Logado"}]
      res.render('index', {validacao})
      return;
  }
  
}

module.exports.iniciaPage = function(app, req, res) {
  
  autenticarUsuario(req, res)
  var msg = ""
    if(req.query.msg !== ""){
      msg = req.query.msg
    }
  
  var notificacao
  const usuario = req.session.nome
  const conn = app.config.dbConfig
  const usuarioAdmDAO = new app.app.models.usuarioAdmDAO(conn)
  usuarioAdmDAO.getAgente(function(err, agente) {  agente_banco = agente })
  usuarioAdmDAO.getStatus(function(err, status) { status_banco = status })
  usuarioAdmDAO.iniciaPage(function(err, result) {
   for (let i = 0; i < result.length; i++) {
      nomeBanco(result[i], result[i].banco_portado)
   }
      if (err) {
         res.send('error')
      }else{
         res.render('dashboardAdm/dash', {nome:usuario, dados:result, agente:agente_banco, status: status_banco, menu:'./template/menu.ejs', page: './template/page.ejs'})        
      }
   })
}

module.exports.cadastraCliente = function(app, req, res) {
  try {
    const data = new Date
    const dadosForm = req.body
    dadosForm.responsavel = req.session.nome
    dadosForm.id_responsavel = req.session._id
    const conn = app.config.dbConfig
    const usuarioAdmDAO = new app.app.models.usuarioAdmDAO(conn)
    usuarioAdmDAO.cadastraCliente(dadosForm, function(err, result){
      console.log(result)
      dadosForm.id = result.insertId
      usuarioAdmDAO.inserirHistorico(dadosForm, function() {
         if (err) {
            res.send(err)
         }else if (result != undefined){
            res.redirect('/dashboardAdm?msg=cliente_cadastrado')
         } else {
            res.redirect('/dashboardAdm?msg=cliente_nao_cadastrado')
         }
      })
   }) 
  } catch (error) {
    console.log('rrtrrdtrd')
  }
}

module.exports.historico = function(app, req, res) {
    
  autenticarUsuario(req, res)

   const usuario = req.session.nome
   const query = req.query
   const id = query.id
   const conn = app.config.dbConfig
   const usuarioAdmDAO = new app.app.models.usuarioAdmDAO(conn)
   usuarioAdmDAO.historico(id, function(err, result) {
      if (err) {
         res.send(err)
      }else if(result[0] != undefined) {
         res.render('dashboardAdm/dash', {nome:usuario, dados: result, notificacao: 12, page: './template/historico.ejs', menu:'./template/menu.ejs'}) 
      } else{
         res.redirect('/dashboardAdm?msg=cliente_sem_historico')
      }
   })
}

module.exports.editarClientes = function(app, req, res) {
   const dadosForm = req.body
   const conn = app.config.dbConfig
   const usuarioAdmDAO = new app.app.models.usuarioAdmDAO(conn)
   usuarioAdmDAO.editarClientes(dadosForm, function(err, result) {
      usuarioAdmDAO.inserirHistorico(dadosForm, function(error, resultado) {
         if (err) {
            res.send('error')
         }else{
            res.redirect('/dashboardAdm?msg=cliente_editado')
         }
      })
   })
}

module.exports.downloadExcel = function (app, req, res) {
  const dadosForm = req.body
  let id = dadosForm.id.join()
  const conn = app.config.dbConfig
  const usuarioAdmDAO = new app.app.models.usuarioAdmDAO(conn)
  usuarioAdmDAO.downloadExcel(id, function (err, customers, fields) {
    console.log(customers)
    if(customers == undefined){
      console.log(err)
    }
    for (let i = 0; i < customers.length; i++) {
      nomeBanco(customers[i], customers[i].banco_portado)
   }
    downloadExcel(res, customers, fields)
  })  
}

module.exports.cadastrarUsuario = function(app, req, res) {
  const dadosForm = req.body
  const conn = app.config.dbConfig
  const usuarioAdmDAO =  new app.app.models.usuarioAdmDAO(conn)
  usuarioAdmDAO.cadastrarUsuario(dadosForm, function (err, result) { 
      if (err) {
         res.send(err)
      }else if(result != undefined){
         res.redirect('/dashboardAdm?msg=usuario_cadastrado') 
      }else{
         res.redirect('/dashboardAdm?msg=usuario_nao_cadastrado')
      }
   })  
}

module.exports.manager = function (app, req, res) {
  
  autenticarUsuario(req, res)

  const conn = app.config.dbConfig
  const usuarioAdmDAO =  new app.app.models.usuarioAdmDAO(conn)
  const usuario = req.session.nome
  usuarioAdmDAO.getUsuario(function(err, result) { 
      res.render('dashboardAdm/template/maneger', {usuario_maneger: result})
   })
}

module.exports.editar = function(app, req, res) {
  
  autenticarUsuario(req, res)
  
  const dadosForm = req.query
   const id = dadosForm.id
   const usuario = req.session.nome
   const conn = app.config.dbConfig
   const usuarioAdmDAO = new app.app.models.usuarioAdmDAO(conn)
   usuarioAdmDAO.consultaEdit(id, function(err, result) {
      if (err) {
         res.send(err)
      }else if(result[0] != undefined){

            res.render('dashboardAdm/dash', {nome:usuario, dados:result, agente: agente_banco, status: status_banco, notificacao: 12, page: './template/edit.ejs', menu:'./template/menu.ejs'})
         
      }else {
         res.redirect('/dashboardAdm?msg=cliente_nao_encontrado')
      }
   })
}


module.exports.conAjax = function(app, req, res) {
    
   autenticarUsuario(req, res)

   const conn = app.config.dbConfig
   const usuarioAdmDAO = new app.app.models.usuarioAdmDAO(conn)
   usuarioAdmDAO.conAjax(function(err, result) {
      for (let i = 0; i < result.length; i++) {
         nomeBanco(result[i], result[i].banco_portado)
      }
     if (err) {
        res.send(err)
     }else if (result[0] != undefined){
        
           res.render('dashboardAdm/template/clientes', {dados:result})
        
     }else{
        res.redirect('/dashboardAdm?msg=cliente_nao_encontrado')
     }
  })
}

module.exports.tabela = function(app, req, res) {
    
   autenticarUsuario(req, res)
   
   const dadosForm = req.body
   const usuario = req.session.nome
   const conn = app.config.dbConfig
   const usuarioAdmDAO = new app.app.models.usuarioAdmDAO(conn)
   usuarioAdmDAO.consultarClientes(dadosForm, function(err, result) {
      for (let i = 0; i < result.length; i++) {
         nomeBanco(result[i], result[i].banco_portado)
      }
      if (err) {
         console.log(err)
      }else if (result != undefined){
         res.render('dashboardAdm/dash', {nome:usuario, dados:result, agente: agente_banco, status: status_banco, notificacao: 12, page: './template/page.ejs', menu:'./template/menu.ejs'})
      }else{
         res.redirect('/dashboardAdm?msg=cliente_nao_encontrado')
      }
   })
}

module.exports.deletarCliente = function(app, req, res) {
   const dadosForm = req.query
   const _id = dadosForm.id
   const conn = app.config.dbConfig
   const usuarioAdmDAO = new app.app.models.usuarioAdmDAO(conn)
   usuarioAdmDAO.delHistoricoClientes(_id, function(erro, resultado) {
      usuarioAdmDAO.delClientes(_id, function(err, result){
         if (result != undefined) {
          res.redirect('/dashboardAdm?msg=del_cliente')
         }else{
          res.redirect('/dashboardAdm?msg=erro_del_cliente')
         }
      }) 
   })
}


module.exports.deletarUsuario = function(app, req, res) {
    const dadosForm = req.query
    const _id = dadosForm.id
    const conn = app.config.dbConfig
    const usuarioAdmDAO = new app.app.models.usuarioAdmDAO(conn)
   usuarioAdmDAO.deletarUsuario(_id, function(err, result){
      if (result != undefined) {
        res.redirect('/dashboardAdm?msg=Usuario_del')
      }else{
        res.redirect('/dashboardAdm?msg=erro_del_usuario')
      }
   })
}

module.exports.deletarAgente = function(app, req, res) {
   const dadosForm = req.query
   const _id = dadosForm.id
   const conn = app.config.dbConfig
   const usuarioAdmDAO = new app.app.models.usuarioAdmDAO(conn)
  usuarioAdmDAO.deletarAgente(_id, function(err, result){
      if (result != undefined) {
         res.redirect('/dashboardAdm?msg=erro_del_agente')
      }else{
          res.redirect('/dashboardAdm?msg=Agente_del')
      }   
   }) 
}

module.exports.deletarStatus = function(app, req, res) {
    const dadosForm = req.query
    const _id = dadosForm.id
    const conn = app.config.dbConfig
    const usuarioAdmDAO = new app.app.models.usuarioAdmDAO(conn)
   usuarioAdmDAO.deletarStatus(_id, function(err, result){
      if (result != undefined) {
         res.redirect('/dashboardAdm?msg=erro_del_status')
      }else{
         res.redirect('/dashboardAdm?msg=Status_del')
      }
   })
}

module.exports.prioridadeVerde = function(app, req, res) {
   var dados = []
   var j = 0
   const conn = app.config.dbConfig
   const usuarioAdmDAO = new app.app.models.usuarioAdmDAO(conn)
  usuarioAdmDAO.conAjax(function(err, result){
     if (result[0] != undefined) {
      for (let i = 0; i < result.length; i++) {
         var date = new Date()
         var data_banco = result[i].data_modificacao
         function datarest(date, data_formatada) {
             var utc1 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
             var utc2 = Date.UTC(data_formatada.getFullYear(), data_formatada.getMonth(), data_formatada.getDate());
             return Math.floor((utc1 - utc2) / ( 1000 * 60 * 60 * 24) );
         }
         var cont = datarest(date, data_banco)
         if(cont <= 2){ 
           dados[j] = result[i]
           j++
         }
  }
    res.render('dashboardAdm/template/clientes', {dados:dados})  
      }else{
         res.redirect('/dashboardAdm?msg=erroVerde')
     }
  })
}


module.exports.prioridadeVermelho = function(app, req, res) {
   var dados = []
   var j = 0
   const conn = app.config.dbConfig
   const usuarioAdmDAO = new app.app.models.usuarioAdmDAO(conn)
  usuarioAdmDAO.conAjax(function(err, result){
     if (result[0] != undefined) {
        
      for (let i = 0; i < result.length; i++) {
             var date = new Date()
             var data_banco = result[i].data_modificacao
             function datarest(date, data_formatada) {
                 var utc1 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
                 var utc2 = Date.UTC(data_formatada.getFullYear(), data_formatada.getMonth(), data_formatada.getDate());
                 return Math.floor((utc1 - utc2) / ( 1000 * 60 * 60 * 24) );
             }
             var cont = datarest(date, data_banco)
             if(cont >= 4){ 
               dados[j] = result[i]
               j++
             }
      }
        res.render('dashboardAdm/template/clientes', {dados:dados})
        
      }else{
         res.redirect('/dashboardAdm?msg=erroVermelho')
      }
  })
}



module.exports.prioridadeLaranja = function(app, req, res) {   
   var dados = []
   var j = 0
   const conn = app.config.dbConfig
   const usuarioAdmDAO = new app.app.models.usuarioAdmDAO(conn)
  usuarioAdmDAO.conAjax(function(err, result){
     if (result[0] != undefined) {
      for (let i = 0; i < result.length; i++) {
             var date = new Date()
             var data_banco = result[i].data_modificacao
             function datarest(date, data_formatada) {
                 var utc1 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
                 var utc2 = Date.UTC(data_formatada.getFullYear(), data_formatada.getMonth(), data_formatada.getDate());
                 return Math.floor((utc1 - utc2) / ( 1000 * 60 * 60 * 24) );
             }
             var cont = datarest(date, data_banco)
             if(cont == 3){ 
               dados[j] = result[i]
               j++
             }
      }
        res.render('dashboardAdm/template/clientes', {dados:dados})
     }else{
      res.redirect('/dashboardAdm?msg=erroLaranja')
     }
  })
}
