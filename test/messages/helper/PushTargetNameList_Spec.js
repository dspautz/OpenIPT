var chai = require('chai');
chai.use(require('chai-change'));

var expect = require("chai").expect;
var should = require('chai').should;

// Specs for PushTargetNameList
describe("PushTargetNameList", function() {

	var PushTargetNameList = require("../../lib/messages/helper/PushTargetNameList");
	var pushTargetNameList;	
		
	before(function() {
		    // runs before all tests in this block
	})
		  
	after(function(){
		    // runs after all tests in this block
	})
		  
	beforeEach(function(){
		pushTargetNameList = new PushTargetNameList();
	})
		  
	afterEach(function(){
		    // runs after each test in this block
	})
	  
	describe("getResponse() / setResponse()", function(){
	});

	  
	describe("getSize()", function() { 
	});
	  
	describe("write()", function() {
	});
	  
	describe("parse()", function() {
	});  
});