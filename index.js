const { readFileSync } = require("fs");
var Repositorio = require("./repositorio.js");
var ServicoCalculoFatura = require("./servico.js");
var { gerarFaturaStr, gerarFaturaHTML } = require("./apresentacao.js");

const calc = new ServicoCalculoFatura(new Repositorio());
const faturas = JSON.parse(readFileSync("./faturas.json"));
const faturaStr = gerarFaturaStr(faturas, calc);
const faturaHTML = gerarFaturaHTML(faturas, calc);
console.log(faturaStr);
console.log(faturaHTML);
