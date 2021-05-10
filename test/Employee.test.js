const Em = require("../lib/Employee");


describe('Employ', () => {
    describe('Initialization', () => {
      // Positive test
      it("should test for a matching value", () => {
        // Arrange
        const text = 'employee name';
  
        // Act
        const obj = new Em(text,"r");
  
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


   