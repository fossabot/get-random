const { getStr, getNum, getSafer } = require("../dist/index");
const { expect } = require("chai");

describe("test getStr", function() {
  it("return a string", function() {
    expect(getStr()).to.be.a("string");
  });
  it("string's length is 6", function() {
    expect(getStr()).to.have.lengthOf(6);
  });
  it("string's length is 10", function() {
    expect(getStr(10)).to.have.lengthOf(10);
  });
});

describe("test getNum", function() {
  it("if param is string return 0", function() {
    expect(getNum("error", "error"))
      .to.be.a("number")
      .that.equal(0);
  });
  it("if param is out of safe number range return 0", function() {
    expect(getNum(0, 2 ** 53))
      .to.be.a("number")
      .that.equal(0);
  });
  it("get a number", function() {
    expect(getNum(2, 10)).to.be.a("number");
  });
  it("num in [2,10) ", function() {
    const num = getNum(2, 10);
    expect(num >= 2 && num <= 10).to.be.true;
  });
  it("param min > max ", function() {
    const num = getNum(10, 2);
    expect(num >= 2 && num <= 10).to.be.true;
  });
});

describe("get safe string", function() {
  it("get 16 letter", function() {
    expect(getSafer())
      .to.a("string")
      .that.have.lengthOf(16);
  });

  it("get 8 string", function() {
    expect(getSafer(8))
      .to.a("string")
      .that.have.lengthOf(8);
  });
});
