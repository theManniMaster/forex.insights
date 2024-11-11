import { Country } from "../interfaces";
import * as flags from "./flags";

/**
 * Country data.
 */
const countries: Country[] = [
    { "currency": "AED", "flag": flags.aeFlag, "name": "United Arab Emirates" },
    { "currency": "AFN", "flag": flags.afFlag, "name": "Afghanistan" },
    { "currency": "ALL", "flag": flags.alFlag, "name": "Albania" },
    { "currency": "AMD", "flag": flags.amFlag, "name": "Armenia" },
    { "currency": "AOA", "flag": flags.aoFlag, "name": "Angola" },
    { "currency": "ARS", "flag": flags.arFlag, "name": "Argentina" },
    { "currency": "AUD", "flag": flags.auFlag, "name": "Australia" },
    { "currency": "AZN", "flag": flags.azFlag, "name": "Azerbaijan" },
    { "currency": "BAM", "flag": flags.baFlag, "name": "Bosnia and Herzegovina" },
    { "currency": "BBD", "flag": flags.bbFlag, "name": "Barbados" },
    { "currency": "BDT", "flag": flags.bdFlag, "name": "Bangladesh" },
    { "currency": "BGN", "flag": flags.bgFlag, "name": "Bulgaria" },
    { "currency": "BHD", "flag": flags.bhFlag, "name": "Bahrain" },
    { "currency": "BIF", "flag": flags.biFlag, "name": "Burundi" },
    { "currency": "BMD", "flag": flags.bmFlag, "name": "Bermuda" },
    { "currency": "BND", "flag": flags.bnFlag, "name": "Brunei" },
    { "currency": "BOB", "flag": flags.boFlag, "name": "Bolivia" },
    { "currency": "BRL", "flag": flags.brFlag, "name": "Brazil" },
    { "currency": "BSD", "flag": flags.bsFlag, "name": "Bahamas" },
    { "currency": "BTN", "flag": flags.btFlag, "name": "Bhutan" },
    { "currency": "BWP", "flag": flags.bwFlag, "name": "Botswana" },
    { "currency": "BYN", "flag": flags.byFlag, "name": "Belarus" },
    { "currency": "BZD", "flag": flags.bzFlag, "name": "Belize" },
    { "currency": "CAD", "flag": flags.caFlag, "name": "Canada" },
    { "currency": "CDF", "flag": flags.cdFlag, "name": "Democratic Republic of the Congo" },
    { "currency": "CHF", "flag": flags.chFlag, "name": "Switzerland" },
    { "currency": "CLP", "flag": flags.clFlag, "name": "Chile" },
    { "currency": "CNY", "flag": flags.cnFlag, "name": "China" },
    { "currency": "COP", "flag": flags.coFlag, "name": "Colombia" },
    { "currency": "CRC", "flag": flags.crFlag, "name": "Costa Rica" },
    { "currency": "CUP", "flag": flags.cuFlag, "name": "Cuba" },
    { "currency": "CVE", "flag": flags.cvFlag, "name": "Cape Verde" },
    { "currency": "CZK", "flag": flags.czFlag, "name": "Czech Republic" },
    { "currency": "DJF", "flag": flags.djFlag, "name": "Djibouti" },
    { "currency": "DKK", "flag": flags.dkFlag, "name": "Denmark" },
    { "currency": "DOP", "flag": flags.doFlag, "name": "Dominican Republic" },
    { "currency": "DZD", "flag": flags.dzFlag, "name": "Algeria" },
    { "currency": "EGP", "flag": flags.egFlag, "name": "Egypt" },
    { "currency": "ERN", "flag": flags.erFlag, "name": "Eritrea" },
    { "currency": "ETB", "flag": flags.etFlag, "name": "Ethiopia" },
    { "currency": "EUR", "flag": flags.euFlag, "name": "Eurozone" },
    { "currency": "FJD", "flag": flags.fjFlag, "name": "Fiji" },
    { "currency": "FKP", "flag": flags.fkFlag, "name": "Falkland Islands" },
    { "currency": "FOK", "flag": flags.foFlag, "name": "Faroe Islands" },
    { "currency": "GBP", "flag": flags.gbFlag, "name": "United Kingdom" },
    { "currency": "GEL", "flag": flags.geFlag, "name": "Georgia" },
    { "currency": "GGP", "flag": flags.ggFlag, "name": "Guernsey" },
    { "currency": "GHS", "flag": flags.ghFlag, "name": "Ghana" },
    { "currency": "GIP", "flag": flags.giFlag, "name": "Gibraltar" },
    { "currency": "GMD", "flag": flags.gmFlag, "name": "Gambia" },
    { "currency": "GNF", "flag": flags.gnFlag, "name": "Guinea" },
    { "currency": "GTQ", "flag": flags.gtFlag, "name": "Guatemala" },
    { "currency": "GYD", "flag": flags.gyFlag, "name": "Guyana" },
    { "currency": "HKD", "flag": flags.hkFlag, "name": "Hong Kong" },
    { "currency": "HNL", "flag": flags.hnFlag, "name": "Honduras" },
    { "currency": "HRK", "flag": flags.hrFlag, "name": "Croatia" },
    { "currency": "HTG", "flag": flags.htFlag, "name": "Haiti" },
    { "currency": "HUF", "flag": flags.huFlag, "name": "Hungary" },
    { "currency": "IDR", "flag": flags.idFlag, "name": "Indonesia" },
    { "currency": "ILS", "flag": flags.ilFlag, "name": "Israel" },
    { "currency": "IMP", "flag": flags.imFlag, "name": "Isle of Man" },
    { "currency": "INR", "flag": flags.inFlag, "name": "India" },
    { "currency": "IQD", "flag": flags.iqFlag, "name": "Iraq" },
    { "currency": "IRR", "flag": flags.irFlag, "name": "Iran" },
    { "currency": "ISK", "flag": flags.isFlag, "name": "Iceland" },
    { "currency": "JEP", "flag": flags.jeFlag, "name": "Jersey" },
    { "currency": "JMD", "flag": flags.jmFlag, "name": "Jamaica" },
    { "currency": "JOD", "flag": flags.joFlag, "name": "Jordan" },
    { "currency": "JPY", "flag": flags.jpFlag, "name": "Japan" },
    { "currency": "KES", "flag": flags.keFlag, "name": "Kenya" },
    { "currency": "KGS", "flag": flags.kgFlag, "name": "Kyrgyzstan" },
    { "currency": "KHR", "flag": flags.khFlag, "name": "Cambodia" },
    { "currency": "KID", "flag": flags.kiFlag, "name": "Kiribati" },
    { "currency": "KMF", "flag": flags.kmFlag, "name": "Comoros" },
    { "currency": "KRW", "flag": flags.krFlag, "name": "South Korea" },
    { "currency": "KWD", "flag": flags.kwFlag, "name": "Kuwait" },
    { "currency": "KYD", "flag": flags.kyFlag, "name": "Cayman Islands" },
    { "currency": "KZT", "flag": flags.kzFlag, "name": "Kazakhstan" },
    { "currency": "LAK", "flag": flags.laFlag, "name": "Laos" },
    { "currency": "LBP", "flag": flags.lbFlag, "name": "Lebanon" },
    { "currency": "LKR", "flag": flags.lkFlag, "name": "Sri Lanka" },
    { "currency": "LRD", "flag": flags.lrFlag, "name": "Liberia" },
    { "currency": "LSL", "flag": flags.lsFlag, "name": "Lesotho" },
    { "currency": "LYD", "flag": flags.lyFlag, "name": "Libya" },
    { "currency": "MAD", "flag": flags.maFlag, "name": "Morocco" },
    { "currency": "MDL", "flag": flags.mdFlag, "name": "Moldova" },
    { "currency": "MGA", "flag": flags.mgFlag, "name": "Madagascar" },
    { "currency": "MKD", "flag": flags.mkFlag, "name": "North Macedonia" },
    { "currency": "MMK", "flag": flags.mmFlag, "name": "Myanmar" },
    { "currency": "MNT", "flag": flags.mnFlag, "name": "Mongolia" },
    { "currency": "MOP", "flag": flags.moFlag, "name": "Macau" },
    { "currency": "MRU", "flag": flags.mrFlag, "name": "Mauritania" },
    { "currency": "MUR", "flag": flags.muFlag, "name": "Mauritius" },
    { "currency": "MVR", "flag": flags.mvFlag, "name": "Maldives" },
    { "currency": "MWK", "flag": flags.mwFlag, "name": "Malawi" },
    { "currency": "MXN", "flag": flags.mxFlag, "name": "Mexico" },
    { "currency": "MYR", "flag": flags.myFlag, "name": "Malaysia" },
    { "currency": "MZN", "flag": flags.mzFlag, "name": "Mozambique" },
    { "currency": "NAD", "flag": flags.naFlag, "name": "Namibia" },
    { "currency": "NGN", "flag": flags.ngFlag, "name": "Nigeria" },
    { "currency": "NIO", "flag": flags.niFlag, "name": "Nicaragua" },
    { "currency": "NOK", "flag": flags.noFlag, "name": "Norway" },
    { "currency": "NPR", "flag": flags.npFlag, "name": "Nepal" },
    { "currency": "NZD", "flag": flags.nzFlag, "name": "New Zealand" },
    { "currency": "OMR", "flag": flags.omFlag, "name": "Oman" },
    { "currency": "PAB", "flag": flags.paFlag, "name": "Panama" },
    { "currency": "PEN", "flag": flags.peFlag, "name": "Peru" },
    { "currency": "PGK", "flag": flags.pgFlag, "name": "Papua New Guinea" },
    { "currency": "PHP", "flag": flags.phFlag, "name": "Philippines" },
    { "currency": "PKR", "flag": flags.pkFlag, "name": "Pakistan" },
    { "currency": "PLN", "flag": flags.plFlag, "name": "Poland" },
    { "currency": "PYG", "flag": flags.pyFlag, "name": "Paraguay" },
    { "currency": "QAR", "flag": flags.qaFlag, "name": "Qatar" },
    { "currency": "RON", "flag": flags.roFlag, "name": "Romania" },
    { "currency": "RSD", "flag": flags.rsFlag, "name": "Serbia" },
    { "currency": "RUB", "flag": flags.ruFlag, "name": "Russia" },
    { "currency": "RWF", "flag": flags.rwFlag, "name": "Rwanda" },
    { "currency": "SAR", "flag": flags.saFlag, "name": "Saudi Arabia" },
    { "currency": "SBD", "flag": flags.sbFlag, "name": "Solomon Islands" },
    { "currency": "SCR", "flag": flags.scFlag, "name": "Seychelles" },
    { "currency": "SDG", "flag": flags.sdFlag, "name": "Sudan" },
    { "currency": "SEK", "flag": flags.seFlag, "name": "Sweden" },
    { "currency": "SGD", "flag": flags.sgFlag, "name": "Singapore" },
    { "currency": "SHP", "flag": flags.shFlag, "name": "Saint Helena" },
    { "currency": "SLE", "flag": flags.slFlag, "name": "Sierra Leone" },
    { "currency": "SOS", "flag": flags.soFlag, "name": "Somalia" },
    { "currency": "SRD", "flag": flags.srFlag, "name": "Suriname" },
    { "currency": "SSP", "flag": flags.ssFlag, "name": "South Sudan" },
    { "currency": "STN", "flag": flags.stFlag, "name": "S�o Tom� and Pr�ncipe" },
    { "currency": "SYP", "flag": flags.syFlag, "name": "Syria" },
    { "currency": "SZL", "flag": flags.szFlag, "name": "Eswatini" },
    { "currency": "THB", "flag": flags.thFlag, "name": "Thailand" },
    { "currency": "TJS", "flag": flags.tjFlag, "name": "Tajikistan" },
    { "currency": "TMT", "flag": flags.tmFlag, "name": "Turkmenistan" },
    { "currency": "TND", "flag": flags.tnFlag, "name": "Tunisia" },
    { "currency": "TOP", "flag": flags.toFlag, "name": "Tonga" },
    { "currency": "TRY", "flag": flags.trFlag, "name": "Turkey" },
    { "currency": "TTD", "flag": flags.ttFlag, "name": "Trinidad and Tobago" },
    { "currency": "TWD", "flag": flags.twFlag, "name": "Taiwan" },
    { "currency": "TZS", "flag": flags.tzFlag, "name": "Tanzania" },
    { "currency": "UAH", "flag": flags.uaFlag, "name": "Ukraine" },
    { "currency": "UGX", "flag": flags.ugFlag, "name": "Uganda" },
    { "currency": "USD", "flag": flags.usFlag, "name": "United States" },
    { "currency": "UYU", "flag": flags.uyFlag, "name": "Uruguay" },
    { "currency": "UZS", "flag": flags.uzFlag, "name": "Uzbekistan" },
    { "currency": "VND", "flag": flags.vnFlag, "name": "Vietnam" },
    { "currency": "VUV", "flag": flags.vuFlag, "name": "Vanuatu" },
    { "currency": "WST", "flag": flags.wsFlag, "name": "Samoa" },
    { "currency": "YER", "flag": flags.yeFlag, "name": "Yemen" },
    { "currency": "ZAR", "flag": flags.zaFlag, "name": "South Africa" },
    { "currency": "ZMW", "flag": flags.zmFlag, "name": "Zambia" },
    { "currency": "ZWL", "flag": flags.zwFlag, "name": "Zimbabwe" }
];

export default countries;