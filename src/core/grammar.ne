# grammar.ne
@{%
const { lexer } = require('./lexer');
%}

@lexer lexer

Program -> Statement*

Statement -> FunctionDecl | Assign | IfStmt | WhileLoop | Return

FunctionDecl -> "function" ident "(" Params ")" Block "end" {%
  ([, name, , params, , block]) => ({
    type: 'Function',
    name: name.value,
    params: params,
    body: block
  })
%}

Block -> Statement* {% id %}

Params -> [ident] {% ([p]) => [p.value] %} | Params "," ident {% ([ps, , p]) => ps.concat(p.value) %}

Assign -> "local"? ident "=" Exp ";" {%
  ([local, name, , value]) => ({
    type: 'Assign',
    name: name.value,
    value: value,
    local: !!local
  })
%}

Exp -> BinOp | Literal | ident | FunctionCall

FunctionCall -> ident "(" Args ")" {%
  ([name, , args]) => ({
    type: 'Call',
    func: name.value,
    args: args
  })
%}

Literal -> number {% ([n]) => ({ type: 'Number', value: Number(n.value) } %}
  | string {% ([s]) => ({ type: 'String', value: s.value.slice(1,-1) }) %}

# ... остальные правила для операторов и управляющих структур