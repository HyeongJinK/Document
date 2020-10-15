The next step of the TDD cycle is to refactor your work. This step is often the hardest, because our natural impulse can be to get straight into the next feature. Chasing green, as I like to call it: building more and more functionality is much more exciting. Refactoring, however, is much more zen.

The rule "more haste; less speed" applies to coding, just as in many other areas of life. If you skip the refactoring phase, your code quality will deteriorate. If you develop a habit of skipping refactoring, your code base will soon become difficult to work with.

It takes a lot of personal discipline to consistently refactor, but you will reap the rewards of a code base that remains maintainable as it ages.

Right now, we have some repeated code between our two tests. Let's fix that.

Note
Test code needs as much care and attention as production code. The number one principle you'll be relying on when refactoring your tests is Don't Repeat Yourself (DRY). Drying up tests is a phrase all TDDers repeat often.

Promoting variables
Both of our tests use the same two variables: container and customer. We can pull up these declarations to the outer describe scope, but leave the definitions within the tests. Since we'll be splitting declaration and definition, that also means we'll need to use let instead of const:

Just above the first test, write the following two lines:

Copy
let container;
let customer;
Then, remove the word const from both of the tests, and re-run your tests, which should still be passing.

Using a beforeEach block
Both of our tests start with some setup or arrangement. When that setup is common to all tests, we can promote them into a beforeEach block instead. Code in this block is executed before each test.

Above your first test, write the following code, and delete the corresponding call to createElement from each of your two tests:

Copy
beforeEach(() => {
  container = document.createElement('div');
});
Since we defined container in the scope of the describe block, the value set here in the beforeEach block will be available to our test once it executes.

Note
Be careful when you use variables defined within the describe scope. These variables are not cleared between each test execution, so you are running the risk of non-independent tests. Therefore, any variable you declare in the describe scope should be assigned to a new value in a corresponding beforeEach block, or in the first part of each test, just as we've done here.

Extracting methods
The call to ReactDOM.render is the same in both methods. Since it's the same in both methods, it makes sense to pull it out.

However, rather than pull it out as-is, we can create a new function that takes the Appointment component as its parameter. This way, we can clearly see how our test data objects are woven through the object under test. If we hid that within an extracted method, the test would be less clear.

Note
The parts of a test that you want to see are the parts that differ between tests. Usually, some data remains the same (container in this example) and some differs (customer in this example). Do your best to hide away whatever is the same and proudly display what differs.

Above the first test, write the following definition:

Copy
const render = component => ReactDOM.render(component, container);
Now, replace the call to ReactDOM.render in each test with this line:

Copy
render(<Appointment customer={customer} />);
Re-run your tests now—they should still be passing.