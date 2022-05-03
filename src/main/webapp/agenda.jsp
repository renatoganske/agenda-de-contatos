<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ page import="model.JavaBeans"%>
<%@ page import="java.util.ArrayList"%>
<%
ArrayList<JavaBeans> lista = (ArrayList<JavaBeans>) request.getAttribute("contatos");
%>
<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<title>Agenda de contatos</title>
<link rel="icon" href="imagens/favicon.png">
<link rel="stylesheet" href="style.css">
</head>
<body>
	<h1>Agenda de Contatos</h1>
	<a href="novo.html" class="Botao1">Novo contato</a>
	<table id="tabela">
		<thead>
			<tr>
				<th>Id</th>
				<th>Nome</th>
				<th>Fone</th>
				<th>Email</th>
			</tr>
		</thead>
		<tbody>
		<%for (int i=0; i < lista.size(); i++) { %>
			<tr>
				<td> <%=lista.get(i).getIdcon()%></td>
				<td> <%=lista.get(i).getNome()%></td>
				<td> <%=lista.get(i).getFone()%></td>
				<td> <%=lista.get(i).getEmail()%></td>
			</tr>
		<%} %>
		</tbody>

	</table>
</body>
</html>