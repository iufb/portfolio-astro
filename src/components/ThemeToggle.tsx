export const ThemeToggle = () => {
  const toggle = () => {
    const root = document.documentElement;
    root.classList.add("dark");
    console.log("Hi");
  };
  return <button onClick={toggle}> Toggle</button>;
};
