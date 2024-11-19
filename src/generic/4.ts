/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

// Define an interface for the props type
interface PageProps {
  title: string;
  content: string;
}

// Define the generic Component class
class Component<T> {
  constructor(public props: T) {}
}

// Define the Page class extending Component with PageProps
class Page extends Component<PageProps> {
  pageInfo() {
    console.log(this.props.title); // Accessing title from PageProps
  }
}

export {};
