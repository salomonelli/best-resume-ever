/* global it, describe */
const assert = require('assert');
const StyleCompiler = require('../src/StyleCompiler');

describe('StyleCompiler', () => {
    describe('#compile()', () => {
        it('should return a promise', () => {
            const less = '@color: blue; h1{ color: @color; }';
            const promise = StyleCompiler.compile(less);
            assert(promise instanceof Promise);
        });
        describe('positive', () => {
            it('should compile less to css', async() => {
                const less = '@color: blue; h1{ color: @color; }';
                const expected = 'h1 {\n  color: blue;\n}\n';
                const css = await StyleCompiler.compile(less);
                assert.equal(css, expected);

            });
            it('should not throw an error when compiling to css', () => {
                const less = '@color: blue; h1{ color: @color; }';
                StyleCompiler.compile(less)
                    .catch(err => assert(err == null));
            });
        });
        describe('negative', () => {
            it('should throw an error if less is not correct', () => {
                const less = '@color: blue; h1#asd+yx[]{ color: @color; }';
                StyleCompiler.compile(less)
                    .then(css => assert(css == null))
                    .catch(err => assert(err != null));
            });
        });
    });
    describe('#minify()', () => {
        it('should return a promise', () => {
            const less = '@color: blue; h1{ color: @color; }';
            const promise = StyleCompiler.compile(less);
            assert(promise instanceof Promise);
        });
        describe('positive', () => {
            it('should minify css', async() => {
                const css = 'h1 {\n  color: blue;\n}\n';
                const expected = 'h1{color:#00f}';
                const minified = await StyleCompiler.minify(css);
                assert.equal(minified.styles, expected);
            });
            it('should not throw an error when minifying css', () => {
                const css = 'h1 {\n  color: blue;\n}\n';
                StyleCompiler.compile(css)
                    .catch(err => assert(err == null));
            });
        });
        describe('negative', () => {
            it('should throw an error if css is not correct', () => {
                const css = 'h1 {\n  color: #yxcöklljasd+blue;\n}\n';
                StyleCompiler.compile(css)
                    .then(minified => assert(minified == null))
                    .catch(err => assert(err != null));
            });
        });
    });
    // TODO test for .run()
});
