import moo, { keywords } from 'moo';

export class Transpiler {
    private readonly lexer: moo.Lexer;

    constructor () {
        this.lexer = moo.compile({
            WS: { match: /\s+/, lineBreaks: true },
            comment: /#.*?$/,
            keyword: ['fun', 'end', 'if', 'then', 'else', 'while', 'do', 'local', 'return'],
            number: /-?(?:0|[1-9]\d*)(?:\.\d+)?/,
            string: /"(?:\\["\\]|[^\n"\\])*"/,
            ident: /[a-zA-Z_]\w*/,
            op: ['+', '-', '*', '/', '==', '~=', '<=', '>=', '<', '>', '=', '(', ')', '{', '}', ',', ';'],
        });

        
    }
}