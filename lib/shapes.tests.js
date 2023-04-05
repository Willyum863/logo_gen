const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="blue" />');