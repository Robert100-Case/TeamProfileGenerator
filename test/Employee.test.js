const Em = require("../lib/Employee");


/*describe("value", () => {
    it("should return the 'Arithmetic' object's 'number' value", () => {
      const num = 10;
      const obj = new Arithmetic(num);

      const result = obj.value();

      expect(result).toEqual(num);
    });
  });
*/
/*  describe('Todo', () => {
    describe('Initialization', () => {
      // Positive test
      it("should test for a string value", () => {
        // Arrange
        const text = 'Pick up milk';
  
        // Act
        const obj = new Todo(text);
  
        // Assert
        expect(obj.text).toEqual(text);
      });
    });
});*/
describe('Employ', () => {
    describe('Initialization', () => {
      // Positive test
      it("should test for a string value", () => {
        // Arrange
        const text = 'Pick up milk';
  
        // Act
        const obj = new Em(text,"r","r");
  
        // Assert
      expect(obj.getName()).toEqual(text);
      });
    });
});


      // Exception test
   /*   it("should throw an error if not provided a 'text' value", () => {
        // Arrange
        const cb = () => new Todo();
        const err = new Error(
          "Expected parameter 'text' to be a non empty string"
        );
  
        // Assert
        expect(cb).toThrowError(err);
      });*/
   