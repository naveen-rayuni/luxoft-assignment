
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require("chai").expect;
 
chai.use(chaiAsPromised);

const {sortUsersFromList} = require('../helpers/index.js'); //importing the helper function used for sorting

// describe() describes what the test is testing
describe("Sort passed array of objects", async function() {
    let arr = [
        {id: 1, name: "C"},
        {id: 2, name: "B"},
        {id: 3, name: "A"},
    ];
    let sortedArr = [
        {id: 3, name: "A"},
        {id: 2, name: "B"},
        {id: 1, name: "C"},
    ]
    // Running the function
    let result = await sortUsersFromList(arr);
    
    describe("Testing that function will not throw an error", async function(){
        // it describes what is expected of the function
        it("Will not throw error", function(){
            return expect(sortUsersFromList(arr)).to.be.fulfilled
        })
    })
    describe("Testing that the output will be a valid array", function(){
        // it describes what is expected of the function
        it("Returns valid array", function(){
            expect(result).to.be.an('array')
        })
    })
    describe("Testing that the output is sorted", function(){
        // it describes what is expected of the function
        it("Returns sorted list", function(){
            // Comparing the results to expectations
            expect(result).to.deep.equal(sortedArr);
        })
    })
})