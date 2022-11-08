import React from "react";
import { NavLink } from "react-router-dom";
import "../pages.css";

function IfElse() {


    const ifsyntax = 'if(condition){ \n\
        // code goes here \n\
    } ';

    return (
        <>
            <div>
                <h1>Java Control Statements | Control Flow in Java</h1>
                <hr />

                <ul>
                    <li>Java compiler executes the code from top to bottom (line by line).</li>
                    <li>However, Java provides statements that can be used to control the flow of Java code. Such statements are called control flow statements.</li>
                    <li>It is one of the fundamental features of Java, which provides a smooth flow of program.</li>
                </ul>


                Java provides three types of control flow statements. <br /><br />

                1) Decision Making statements
                <ul>
                    <li>if statements</li>
                    <li>switch statement</li>
                </ul>


                2) Loop statements
                <ul>
                    <li>for loop</li>
                    <li>while loop</li>
                    <li>do while loop</li>
                    <li>for-each loop</li>
                </ul>


                3) Jump statements
                <ul>
                    <li>break statements</li>
                    <li>continue statement</li>
                </ul>




                <h1>Java if-else Statement</h1>
                <hr />

                The Java if statement is used to test the condition. It checks boolean condition: true or false. There are various types of if statement in Java. <br />
                You can use conditional operators to perform different actions for different decisions.
                <ul>
                    <li>
                        if statement
                    </li>
                    <li>
                        if-else statement
                    </li>
                    <li>
                        if-else-if statement
                    </li>
                    <li>
                        nested if statement
                    </li>
                </ul>


                <h2>1) Java if Statement</h2>
                <p>The Java if statement tests the condition. It executes the if block if condition is true.</p>
                <div className="syntax">
                    Syntax:
                    <p>
                        {ifsyntax}
                    </p>
                </div>

                <h4>Flowchart</h4>

                <p>/// flowchart attache</p>

                <div className="example">
                    example
                    <p>
                        Example Code
                    </p>

                </div>

                <h2>2) Java if-else Statement</h2>
                <p>The Java if-else statement also tests the condition. It executes the if block if condition is true otherwise else block is executed</p>
                <p>Note that if is in lowercase letters. Uppercase letters (If or IF) will generate an error.</p>
                <div className="syntax">
                    Syntax :
                    <p>
                        <pre>
                            if(condition){"{"} <br />
                            <span />    //code if condition is true<br />
                            {"}"}else{"{"}<br />
                            <span />    //code if condition is false<br />
                            {"}"}
                        </pre>
                    </p>
                </div>

                <h2>Using Ternary Operator</h2>
                <p>We can also use ternary operator (? :) to perform the task of if...else statement. It is a shorthand way to check the condition. If the condition is true, the result of ? is returned. But, if the condition is false, the result of : is returned.</p>
                <div className="syntax">
                    Syntax :
                    <p>
                        cond ? //stmt if true : //stmt if false
                    </p>
                </div>


                <h2>3) Java if-else-if ladder Statement</h2>
                <p>The if-else-if ladder statement executes one condition from multiple statements. </p>
                <p>
                    Use the else if statement to specify a new condition if the first condition is false.
                </p>
                <div className="syntax">
                    Syntax :
                    <p>
                        else if else if
                    </p>
                </div>


                <h2>Java Nested if statement</h2>
                <p>The nested if statement represents the if block within another if block. Here, the inner if block condition executes only when outer if block condition is true.</p>

                <div className="syntax">
                    Syntax :
                    <p>
                        ifff nested
                    </p>
                </div>

                <h1>Java Switch Statement</h1>

                <ul>
                    <li>
                        The Java switch statement executes one statement from multiple conditions.
                    </li>
                    <li>
                        It is like if-else-if ladder statement.
                    </li>
                    <li>
                        The switch statement works with byte, short, int, long, enum types, String and some wrapper types like Byte, Short, Int, and Long.
                    </li>
                    <li>
                        Since Java 7, you can use strings in the switch statement.
                    </li>
                </ul>

                <h3>Points to Remember</h3>

                <ul>
                    <li>There can be <em>one or N number of case values</em> for a switch expression.</li>
                    <li>The case value must be of switch expression type only. The case value must be <em>literal or constant</em>. It doesn't allow .</li>
                    <li>The case values must be <em>unique</em>. In case of duplicate value, it renders compile-time error.</li>
                    <li>The Java switch expression must be of <em>byte, short, int, long (with its Wrapper type),  and string</em>.</li>
                    <li>Each case statement can have a <em>break statement</em> which is optional. When control reaches to the break statement, it jumps the control after the switch expression. If a break statement is not found, it executes the next case.</li>
                    <li>The case value can have a <em>default label</em> which is optional.</li>
                </ul>





                <h1>Java For Loop</h1>
                <p>When you know exactly how many times you want to loop through a block of code, use the for loop instead of a while loop.</p>
                <p>Loops are handy because they save time, reduce errors, and they make code more readable.</p>
                <div className="syntax">
                    Syntax :
                    <p>
                        dscds
                    </p>
                </div>

                <div>
                    <ol>
                        <li><b>Initialization:</b> It is the initial condition which is executed once when the loop starts. Here, we can initialize the variable, or we can use an already initialized variable. It is an optional condition.</li>
                        <li><b>Condition:</b> It is the second condition which is executed each time to test the condition of the loop. It continues execution until the condition is false. It must return boolean value either true or false. It is an optional condition.</li>
                        <li><b>Increment/Decrement:</b> It increments or decrements the variable value. It is an optional condition.</li>
                        <li><b>Statement:</b> The statement of the loop is executed each time until the second condition is false.</li>
                    </ol>
                </div>

                <h2>Java Nested for Loop</h2>
                <p>If we have a for loop inside the another loop, it is known as nested for loop. The inner loop executes completely whenever outer loop executes.</p>

                <h2>Java for-each Loop</h2>
                <p>The for-each loop is used to traverse array or collection in Java. It is easier to use than simple for loop because we don't need to increment value and use subscript notation.</p>
                <p>It works on the basis of elements and not the index. It returns element one by one in the defined variable.</p>


                <h2>Java Infinitive for Loop</h2>
                <p>If you use two semicolons ;; in the for loop, it will be infinitive for loop.</p>


                <h1>Java While Loop</h1>
                <hr />
                <p>
                    The Java while loop is used to iterate a part of the program repeatedly until the specified Boolean condition is true. As soon as the Boolean condition becomes false, the loop automatically stops.
                </p>
                <p>
                    The while loop is considered as a repeating if statement. If the number of iteration is not fixed, it is recommended to use the while loop.
                </p>
                <div>
                    <ol>
                        <li><b>Initialization:</b> It is the initial condition which is executed once when the loop starts. Here, we can initialize the variable, or we can use an already initialized variable. It is an optional condition.</li>
                        <li><b>Condition:</b> It is the second condition which is executed each time to test the condition of the loop. It continues execution until the condition is false. It must return boolean value either true or false. It is an optional condition.</li>
                        <li><b>Increment/Decrement:</b> It increments or decrements the variable value. It is an optional condition.</li>
                        <li><b>Statement:</b> The statement of the loop is executed each time until the second condition is false.</li>
                    </ol>
                </div>

                <h4>Flowchart of Java While Loop</h4>
                <p>
                    Here, the important thing about while loop is that, sometimes it may not even execute. If the condition to be tested results into false, the loop body is skipped and first statement after the while loop will be executed.
                </p>

                <h4>Java Infinitive While Loop</h4>

                <h1>
                    Java do-while Loop
                </h1>
                <hr />
                <p>
                    The Java do-while loop is used to iterate a part of the program repeatedly, until the specified condition is true. If the number of iteration is not fixed and you must have to execute the loop at least once, it is recommended to use a do-while loop.
                </p>
                <p>
                    Java do-while loop is called an exit control loop. Therefore, unlike while loop and for loop, the do-while check the condition at the end of loop body. The Java do-while loop is executed at least once because condition is checked after loop body.
                </p>


                <div className="syntax">
                    Sytanx :
                    <p>
                        dscds
                    </p>
                </div>
                <div>
                    <ol>
                        <li><b>Initialization:</b> It is the initial condition which is executed once when the loop starts. Here, we can initialize the variable, or we can use an already initialized variable. It is an optional condition.</li>
                        <li><b>Condition:</b> It is the second condition which is executed each time to test the condition of the loop. It continues execution until the condition is false. It must return boolean value either true or false. It is an optional condition.</li>
                        <li><b>Increment/Decrement:</b> It increments or decrements the variable value. It is an optional condition.</li>
                        <li><b>Statement:</b> The statement of the loop is executed each time until the second condition is false.</li>
                    </ol>
                </div>


                <h3>Java Infinitive do-while Loop</h3>

                <p>If you pass true in the do-while loop, it will be infinitive do-while loop.</p>

                <div className="syntax">
                    Syntax :
                    <p>
                        dsvf
                    </p>
                </div>


                <h1>Java Break Statement</h1>
                <div>
                    <ul>
                        <li>When a break statement is encountered inside a loop, the loop is immediately terminated and the program control resumes at the next statement following the loop.</li>
                        <li>The Java break statement is used to break loop or switch statement. It breaks the current flow of the program at specified condition. In case of inner loop, it breaks only inner loop.</li>
                        <li>We can use Java break statement in all types of loops such as for loop, while loop and do-while loop.</li>
                    </ul>
                </div>

                <div className="syntax">
                    Syntax :
                    <p>
                        break;
                    </p>
                </div>


                <h1>
                    Java Continue Statement
                </h1>

                <div>
                    <ul>
                        <li>The continue statement is used in loop control structure when you need to jump to the next iteration of the loop immediately. It can be used with for loop or while loop</li>
                        <li>The Java continue statement is used to continue the loop. It continues the current flow of the program and skips the remaining code at the specified condition. In case of an inner loop, it continues the inner loop only.</li>
                        <li>We can use Java continue statement in all types of loops such as for loop, while loop and do-while loop.</li>
                    </ul>
                </div>
                <div className="syntax">
                    Syntax :
                    <p>
                        continue;
                    </p>
                </div>


                <h1>Java Methods</h1>
                <div>
                    <ul>
                        <li>A method is a block of code which only runs when it is called.</li>
                        <li>You can pass data, known as parameters, into a method.</li>
                        <li>Methods are used to perform certain actions, and they are also known as functions.</li>
                        <li>The method in Java is a collection of instructions that performs a specific task. It provides the reusability of code.</li>
                        <li>Why use methods? To reuse code: define the code once, and use it many times.</li>
                    </ul>
                </div>

                <h3>Method Declaration</h3>
                <p>The method declaration provides information about method attributes, such as visibility, return-type, name, and arguments. It has six components that are known as method header</p>

                <p><strong>Method Signature:</strong> Every method has a method signature. It is a part of the method declaration. It includes the <strong>method name</strong> and <strong>parameter list</strong>.</p>
                <p><strong>Access Specifier:</strong> Access specifier or modifier is the access type of the method. It specifies the visibility of the method. Java provides <strong>four</strong> types of access specifier:</p>
                <ul>
                    <li><strong>Public:</strong> The method is accessible by all classes when we use public specifier in our application.</li>
                    <li><strong>Private:</strong> When we use a private access specifier, the method is accessible only in the classes in which it is defined.</li>
                    <li><strong>Protected:</strong> When we use protected access specifier, the method is accessible within the same package or subclasses in a different package.</li>
                    <li><strong>Default:</strong> When we do not use any access specifier in the method declaration, Java uses default access specifier by default. It is visible only from the same package only.</li>
                </ul>
                <p><strong>Return Type:</strong> Return type is a data type that the method returns. It may have a primitive data type, object, collection, void, etc. If the method does not return anything, we use void keyword.</p>
                <p><strong>Method Name:</strong> It is a unique name that is used to define the name of a method. It must be corresponding to the functionality of the method. Suppose, if we are creating a method for subtraction of two numbers, the method name must be <strong>subtraction().</strong> A method is invoked by its name.</p>
                <p><strong>Parameter List:</strong> It is the list of parameters separated by a comma and enclosed in the pair of parentheses. It contains the data type and variable name. If the method has no parameter, left the parentheses blank.</p>
                <p><strong>Method Body:</strong> It is a part of the method declaration. It contains all the actions to be performed. It is enclosed within the pair of curly braces.</p>

                <h2 >Naming a Method</h2>
                <p>While defining a method, remember that the method name must be a <strong>verb</strong> and start with a <strong>lowercase</strong> letter. If the method name has more than two words, the first name must be a verb followed by adjective or noun. In the multi-word method name, the first letter of each word must be in <strong>uppercase</strong> except the first word. For example:</p>
                <p><strong>Single-word method name:</strong> sum(), area()</p>
                <p><strong>Multi-word method name:</strong> areaOfCircle(), stringComparision()</p>
                <p>It is also possible that a method has the same name as another method name in the same class, it is known as <strong>method overloading</strong>.</p>
                <h2>Types of Method</h2>
                <p>There are two types of methods in Java:</p>
                <ul>
                    <li>Predefined Method</li>
                    <li>User-defined Method</li>
                </ul>
                <h3 >Predefined Method</h3>
                <p>In Java, predefined methods are the method that is already defined in the Java class libraries is known as predefined methods. It is also known as the <strong>standard library method</strong> or <strong>built-in method</strong>. We can directly use these methods just by calling them in the program at any point. Some pre-defined methods are <strong>length(), equals(), compareTo(), sqrt(),</strong> etc. When we call any of the predefined methods in our program, a series of codes related to the corresponding method runs in the background that is already stored in the library.</p>

                <p>Each and every predefined method is defined inside a class. Such as <strong>print()</strong> method is defined in the <strong>java.io.PrintStream</strong> class. It prints the statement that we write inside the method. For example, <strong>print("Java")</strong>, it prints Java on the console.</p>
                <h3 class="h3">User-defined Method</h3>
                <p>The method written by the user or programmer is known as <strong>a user-defined</strong> method. These methods are modified according to the requirement.</p>
                <h3 >How to Create a User-defined Method</h3>


                <h2>Java Scope</h2>

                <h3>Method Scope</h3>
                <p>Variables declared directly inside a method are available anywhere in the method</p>

                <h3>Block Scope</h3>
                <p>A block of code refers to all of the code between curly braces { }.</p>
                <p>Variables declared inside blocks of code are only accessible by the code between the curly braces, which follows the line in which the variable was declared:</p>














                <h1>Static Method</h1>

                <p>A method that has static keyword is known as static method. In other words, a method that belongs to a class rather than an instance of a class is known as a static method. We can also create a static method by using the keyword <strong>static</strong> before the method name.</p>
                <p>The main advantage of a static method is that we can call it without creating an object. It can access static data members and also change the value of it. It is used to create an instance method. It is invoked by using the class name. The best example of a static method is the <strong>main()</strong> method.</p>


                <h1>Instance Method</h1>
                <p>The method of the class is known as an <strong>instance method</strong>. It is a <strong>non-static</strong> method defined in the class. Before calling or invoking the instance method, it is necessary to create an object of its class. Let's see an example of an instance method.</p>
                <p>There are two types of instance method:</p>
                <ul>
                    <li><strong>Accessor Method</strong></li>
                    <li><strong>Mutator Method</strong></li>
                </ul>


                <p><strong>Accessor Method:</strong> The method(s) that reads the instance variable(s) is known as the accessor method. We can easily identify it because the method is prefixed with the word <strong>get</strong>. It is also known as <strong>getters</strong>. It returns the value of the private field. It is used to get the value of the private field.</p>

                <p><strong>Example</strong></p>

                <p><strong>Mutator Method:</strong> The method(s) read the instance variable(s) and also modify the values. We can easily identify it because the method is prefixed with the word <strong>set</strong>. It is also known as <strong>setters</strong> or <strong>modifiers</strong>. It does not return anything. It accepts a parameter of the same data type that depends on the field. It is used to set the value of the private field.</p>



                <h1>Abstract Method</h1>
                <p>The method that does not has method body is known as abstract method. In other words, without an implementation is known as abstract method. It always declares in the <strong>abstract class</strong>. It means the class itself must be abstract if it has abstract method. To create an abstract method, we use the keyword <strong>abstract</strong>.</p>

                <h1>Factory method</h1>
                <p>It is a method that returns an object to the class to which it belongs. All static methods are factory methods. For example, <strong>NumberFormat obj = NumberFormat.getNumberInstance();</strong></p>



                <h1>Java Recursion</h1>

                <p>Recursion is the technique of making a function call itself. This technique provides a way
                    to break complicated problems down into simple problems which are easier to solve.</p>
                <p>Recursion may be a bit difficult to understand. The
                    best way to figure out how it works is to experiment with it.</p>

                <h2>Halting Condition</h2>
                <p>Just as loops can run into the problem of infinite looping, recursive functions can run into
                    the problem of infinite recursion. Infinite recursion is when the function never stops calling
                    itself. Every recursive function should have a halting condition, which is the condition
                    where the function stops calling itself. In the previous example, the halting condition is
                    when the parameter <code class="w3-codespan">k</code> becomes 0.</p>
                <p>The developer should be very careful with recursion as it can be quite easy to slip into writing a function which never terminates, or one that uses excess amounts of memory or processor power. However, when written correctly recursion can be a very efficient and mathematically-elegant approach to programming.</p>









            </div>
        </>
    )
}


export default IfElse;