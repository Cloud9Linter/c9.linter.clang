/**
 * Lint C files on the fly in Cloud9 using clang.
 *
 * @author 2016, Tobias Bueschel.
 */
"use client";
"use mocha";

define(function(require, exports, module) {
    main.consumes = ["clang.test", "clang"];
    main.provides = [];
    return main;

    function main(options, imports, register) {
        var test = imports["clang.test"];
        var clang = imports.clang;

        var describe = test.describe;
        var it = test.it;
        var before = test.before;
        var after = test.after;
        var beforeEach = test.beforeEach;
        var afterEach = test.afterEach;
        var assert = test.assert;
        var expect = test.expect;

        /***** Initialization *****/

        describe("The module", function(){
            this.timeout(2000);

            beforeEach(function() {
            });

            afterEach(function () {
            });

            it("has a sync test", function() {
            });

            it("has a async test", function(done) {
                done();
            });

            it("has a failing test", function() {
                assert.equal(10, 11);
            });
        });

        register(null, {});
    }
});
