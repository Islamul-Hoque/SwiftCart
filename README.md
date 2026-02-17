# SwiftCart

### 1. What is the difference between null and undefined?
### Answer:
JavaScript-এ undefined এবং null—দুটোই absence of value বোঝাতে ব্যবহৃত হয়, কিন্তু তাদের purpose আলাদা।

undefined মানে হলো variable declare করা হয়েছে, কিন্তু কোনো value assign করা হয়নি। এই ক্ষেত্রে JavaScript engine নিজে থেকেই variable-টিকে undefined হিসেবে set করে দেয়।

আর null হলো এমন একটি value, যেটা আমরা developerরা ইচ্ছাকৃতভাবে assign করি। এতে বুঝা যায় এই variable-এ বর্তমানে কোনো value নেই। উদাহরণস্বরূপ, কোনো API থেকে data না পেলে আমরা user = null সেট করতে পারি।

---

### 2. What is the use of the map() function in JavaScript? How is it different from forEach()? 
### Answer:
map() এবং forEach()—দুটোই JavaScript-এ array iterate করতে ব্যবহৃত হয়, তবে তাদের ব্যবহার আলাদা।
- map() → এটি প্রতিটি এলিমেন্টের উপর একটি ফাংশন চালিয়ে একটি নতুন অ্যারে রিটার্ন করে। মূল অ্যারে অপরিবর্তিত থাকে। এটি ডেটা পরিবর্তন বা নতুন অ্যারে তৈরি করার জন্য ব্যবহার করা হয়।

- forEach() → প্রতিটি এলিমেন্টের উপর কাজ করে, কিন্তু কিছু রিটার্ন করে না। যেমন: কনসোল-এ দেখানো, DOM আপডেট বা API থেকে ডেটা নেওয়া।

---

### 3. What is the difference between == and ===?
### Answer:
JavaScript-এ == loose equality এবং === strict equality check করার জন্য ব্যবহার হয়।

- == শুধু value চেক করে, তুলনার আগে প্রয়োজন হলে type convert করে নেয়।
- === value এবং type—দুটোই চেক করে, কোনো type conversion করে না।

---

### 4. What is the significance of async/await in fetching API data?
### Answer:
API থেকে ডেটা আনার ক্ষেত্রে async/await ব্যবহার করলে কোড readable হয়, try/catch দিয়ে error handle করা সহজ হয়, API কল background-এ চলে তাই main thread freeze হয় না, এবং কোড maintain করা সহজ হয়।

--- 

### 5. Explain the concept of Scope in JavaScript (Global, Function, Block).
### Answer :
Scope বলতে বোঝায় একটি variable বা function কোডের কোন অংশ থেকে access করা যাবে, আর কোন অংশ থেকে যাবে না, সেই boundary বা execution context।

JavaScript‑এ মূলত তিন ধরনের scope আছে:
1. Global Scope → যেকোনো জায়গা থেকে access করা যায়।
2. Function Scope → শুধু function এর ভেতরে access করা যায়।
3. Block Scope (let/const) → শুধু {} block এর ভেতরে access করা যায়।

---