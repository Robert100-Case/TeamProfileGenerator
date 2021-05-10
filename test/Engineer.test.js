const Em = require("../lib/Employee");
const M = require("../lib/Engineer");

describe('Intern', () => {
    describe('Initialization', () => {
      // Positive test
      it("should test for a matching value", () => {
        // Arrange
        const text = 'name test';
  
        // Act
    
  
       const obj = new M(text,text,text);
  
        // Assert
      expect(obj.getName()).toEqual(text);
      });
      it("should test for a string type", () => {
        // Arrange
        var result = typeof 'employee name';
  
        // Act
        const obj = new Em(result,result);
  
        // Assert
      expect(typeof (obj.getEmail())).toEqual(result);
      });
    
    });
});

