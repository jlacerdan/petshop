const express = require("express");
const routes = express.Router();

const Cliente = require("./models/Cliente");
const Fornecedor = require("./models/Fornecedor");

routes.get("/", async (req, res) => {
  const clientes = await Cliente.findAll();

  res.render('pages/cliente/clientes', {
    clientes: clientes
  });
});

routes.get('/cliente/cadastroCliente', (req, res) => {
  res.render('pages/cliente/cadastroCliente');
});

routes.get('/cliente/editar/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, sobrenome, email } = await Cliente.findOne({ where: { id } });
  res.render('pages/cliente/edicaoCliente', { id, nome, sobrenome, email });
});

routes.post('/cliente/cadastroCliente', async (req, res) => {
  let { nome, sobrenome, email } = req.body;
  await Cliente.create({ nome, sobrenome, email });
  res.redirect('/');
});

routes.post('/cliente/edicaoCliente/:id', async (req, res) => {
  const { id } = req.params;
  await Cliente.update({
    nome: req.body.nome,
    sobrenome: req.body.sobrenome,
    email: req.body.email
  }, { where: { id } });
  res.redirect('/');
});

routes.get('/cliente/excluirCliente/:id', async (req, res) => {
  const { id } = req.params;
  await Cliente.destroy({ where: { id } });
  res.redirect('/');
});

routes.get("/fornecedores", async (req, res) => {
  const fornecedores = await Fornecedor.findAll();

  res.render('pages/fornecedor/fornecedores', {
    fornecedores: fornecedores
  });
});

routes.get('/fornecedor/cadastroFornecedor', (req, res) => {
  res.render('pages/fornecedor/cadastroFornecedor');
});

routes.get('/fornecedor/editar/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, sobrenome, email } = await Fornecedor.findOne({ where: { id } });
  res.render('pages/fornecedor/edicaoFornecedor', { id, razaoSocial, nomeFantasia, email });
});

routes.post('/fornecedor/cadastroFornecedor', async (req, res) => {
  let { nome, sobrenome, email } = req.body;
  await Fornecedor.create({ razaoSocial, nomeFantasia, email });
  res.redirect('/');
});

routes.post('/fornecedor/edicaoFornecedor/:id', async (req, res) => {
  const { id } = req.params;
  await Fornecedor.update({
    nome: req.body.razaoSocial,
    sobrenome: req.body.nomeFantasia,
    email: req.body.email
  }, { where: { id } });
  res.redirect('/');
});

routes.get('/fornecedor/excluirFornecedor/:id', async (req, res) => {
  const { id } = req.params;
  await Fornecedor.destroy({ where: { id } });
  res.redirect('/');
});

module.exports = routes;
