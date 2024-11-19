// Define the type for the details object (optional for some pages)
interface PageDetails {
  createAt: Date;
  updateAt: Date;
}

// Define the main interface for the page
interface Page {
  title: string; // Title of the page
  likes: number; // Number of likes
  accounts: string[]; // List of accounts associated with the page
  status: 'open' | 'close'; // Page status, limited to 'open' or 'close'
  details?: PageDetails; // Details object is optional, as not all pages have it
}

// Now, we can use this type for both page1 and page2
const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
};

const page2: Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};
