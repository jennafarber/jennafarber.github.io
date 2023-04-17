// problem 1: 
const sam = {
    firstName: 'Sam',
    department: 'Tech',
    designation: 'Manager',
    salary: 40000,
    raiseEligible: true,
  }
  
  const mary = {
    firstName: 'Mary',
    department: 'Finance',
    designation: 'Trainee',
    salary: 18500,
    raiseEligible: true,
  }
  
  const bill = {
    firstName: 'Bill',
    department: 'HR',
    designation: 'Executive',
    salary: 21200,
    raiseEligible: false,
  }
  
  console.log(sam);
  console.log(mary);
  console.log(bill);
  
  // problem 2:
  const techStars = {
    companyName: 'Tech Stars',
    website: 'www.techstars.site',
    employees: [sam, mary, bill],
  }
  
  console.log(techStars);
  
  // problem 3:
  const anna = {
    firstName: 'Anna',
    department: 'Tech',
    designation: 'Executive',
    salary: 25600,
    raiseEligible: false,
  }
  
  techStars.employees.push(anna);
  
  console.log(techStars);
  
  // problem 4:
  let totalSalary = 0;
  
  techStars.employees.forEach((employee) => {
    totalSalary += employee.salary;
  });
  
  console.log(`Total salary for all company employees: ${totalSalary}`);
  
  // problem 5:
  techStars.employees.forEach((employee) => {
    if (employee.raiseEligible) {
      employee.salary *= 1.1;
      employee.raiseEligible = false;
    }
  });
  
  console.log(techStars);
  
  // problem 6:
  const workingFromHome = ['Anna', 'Sam'];
  
  techStars.employees.forEach((employee) => {
    if (workingFromHome.includes(employee.firstName)) {
      employee.wfh = true;
    } else {
      employee.wfh = false;
    }
  });
  
  console.log(techStars);