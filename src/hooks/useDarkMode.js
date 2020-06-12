//---------------------------------------------------------------
// 4. Now to add the class to the body. If we need to manipulate the 
// DOM directly, how do we do that? Any direct DOM manipulation 
// is considered a side effect, right? So let's use the effect hook.
//---------------------------------------------------------------
import { useEffect } from "react";
// 2. Import `useLocalStorage`
import { useLocalStorage } from "./useLocalStorage";

// 1. Build a function called `useDarkMode`
export function useDarkMode() {
//---------------------------------------------------------------
// 3. Call `useLocalStorage` and pass in the key you want to use to 
// store whether or not dark mode is enabled. Remember, this hook 
// returns an array with a value and a setter in an array, exactly 
// like the state hook, so make sure to capture those values in a `
// const` - `const [someValue, setSomeValue] 
// = useLocalStorage('your key here')
//---------------------------------------------------------------
  const [value, setValue] = useLocalStorage("darkMode");
//---------------------------------------------------------------
// 5. Inside it, check to see if the value from `useLocalStorage` 
// is true or false.
  useEffect(() => { const body = window.document.body;
//---------------------------------------------------------------
// 6. If it's true, add the class `dark-mode` to the `body` element.
    if (value) {
      body.classList.add("dark-mode");
//---------------------------------------------------------------
// 7. If it's false, remove the class from the `body` element.
    } else {
      body.classList.remove("dark-mode");
    }
  }, [value]);
//---------------------------------------------------------------
// 8. we'll need a setter function to toggle dark mode. Let's just 
// forward the value and the setter that were returned out of the 
// `useLocalStorage` call. Return those two values in an array as 
// well.
  return [value, setValue];
}

//---------------------------------------------------------------
// now import the dark mode hook into the `NavBar` component