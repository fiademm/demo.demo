import React, { useEffect, useState } from "react";
import { TextField, Select, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Icon } from '@mui/material';

const employeeData = [
  {
    fullName: "Winifred Watsica",
    email: "Branson9@gmail.com",
    jobArea: "Markets",
    jobTitle: "Corporate Markets Director",
    name: "Hyatt, Weber and Lind",
  },
  {
    fullName: "Milton Pfannerstill",
    email: "Connor53@gmail.com",
    jobArea: "Branding",
    jobTitle: "Chief Group Architect",
    name: "Keeling - Connelly",
  },
  {
    fullName: "Antonio Schmidt",
    email: "Vivianne_Haley87@gmail.com",
    jobArea: "Accountability",
    jobTitle: "Human Creative Executive",
    name: "Batz, Goodwin and Dach",
  },
  {
    fullName: "Meghan Boyle",
    email: "Helene.Williamson@yahoo.com",
    jobArea: "Quality",
    jobTitle: "Product Paradigm Liaison",
    name: "Sawayn, Skiles and Jerde",
  },
  {
    fullName: "Miss Carol Muller DDS",
    email: "Eliane10@hotmail.com",
    jobArea: "Brand",
    jobTitle: "District Applications Agent",
    name: "Greenholt Group",
  },
  {
    fullName: "Mildred Leffler",
    email: "Aron.Von29@gmail.com",
    jobArea: "Optimization",
    jobTitle: "Customer Program Planner",
    name: "Morar - Corkery",
  },
  {
    fullName: "Rene Price",
    email: "Bartholome.Jerde41@hotmail.com",
    jobArea: "Infrastructure",
    jobTitle: "Senior Accounts Designer",
    name: "Ondricka Inc",
  },
  {
    fullName: "Kim Bartell",
    email: "Sharon.Lindgren@gmail.com",
    jobArea: "Interactions",
    jobTitle: "Forward Identity Coordinator",
    name: "Cummerata - O'Hara",
  },
  {
    fullName: "Zachary Marquardt",
    email: "Lowell_Cassin64@hotmail.com",
    jobArea: "Mobility",
    jobTitle: "National Tactics Consultant",
    name: "Hermiston Group",
  },
  {
    fullName: "Duane Wintheiser",
    email: "Malachi78@gmail.com",
    jobArea: "Usability",
    jobTitle: "Senior Division Director",
    name: "Weissnat - Jast",
  },
  {
    fullName: "Miss Sherry Turner",
    email: "Eliseo32@yahoo.com",
    jobArea: "Intranet",
    jobTitle: "Global Solutions Agent",
    name: "Hermiston, Kovacek and Upton",
  },
  {
    fullName: "Evan Armstrong",
    email: "Tobin.Pollich17@yahoo.com",
    jobArea: "Applications",
    jobTitle: "Direct Mobility Representative",
    name: "Predovic and Sons",
  },
  {
    fullName: "Victoria Lang",
    email: "Cordia.Beatty@hotmail.com",
    jobArea: "Directives",
    jobTitle: "Lead Markets Supervisor",
    name: "Barrows LLC",
  },
  {
    fullName: "Julie Green",
    email: "Dario12@hotmail.com",
    jobArea: "Integration",
    jobTitle: "Future Security Planner",
    name: "Wisozk - Johnson",
  },
  {
    fullName: "Mr. Maurice Schulist",
    email: "Daron.Schoen@yahoo.com",
    jobArea: "Configuration",
    jobTitle: "Legacy Mobility Administrator",
    name: "Keebler - Collins",
  },
  {
    fullName: "Melissa Cartwright Jr.",
    email: "Telly_Sauer@gmail.com",
    jobArea: "Program",
    jobTitle: "Global Branding Supervisor",
    name: "Bins and Sons",
  },
  {
    fullName: "Zachary Goodwin",
    email: "April19@hotmail.com",
    jobArea: "Factors",
    jobTitle: "Customer Identity Strategist",
    name: "Stamm LLC",
  },
  {
    fullName: "Danielle Doyle",
    email: "Willie.Trantow65@gmail.com",
    jobArea: "Brand",
    jobTitle: "Lead Applications Assistant",
    name: "Ruecker - Marks",
  },
  {
    fullName: "Jill Yundt",
    email: "Kory.Hoeger@yahoo.com",
    jobArea: "Mobility",
    jobTitle: "Chief Branding Architect",
    name: "Cole Inc",
  },
  {
    fullName: "Roberto Murphy",
    email: "Cornell35@gmail.com",
    jobArea: "Functionality",
    jobTitle: "Direct Data Liaison",
    name: "Waters LLC",
  },
  {
    fullName: "Ian Walsh",
    email: "Diamond_Bergstrom77@hotmail.com",
    jobArea: "Mobility",
    jobTitle: "Chief Directives Representative",
    name: "Ankunding, Kautzer and Feest",
  },
  {
    fullName: "Luther White",
    email: "Valentina.Lynch64@gmail.com",
    jobArea: "Factors",
    jobTitle: "Regional Response Analyst",
    name: "Mitchell Inc",
  },
  {
    fullName: "Adrian Schowalter III",
    email: "Golda35@gmail.com",
    jobArea: "Research",
    jobTitle: "Senior Research Developer",
    name: "Ankunding - Bahringer",
  },
  {
    fullName: "Essie Shields-Harvey",
    email: "Jany.Braun@gmail.com",
    jobArea: "Accountability",
    jobTitle: "Forward Operations Director",
    name: "Weimann and Sons",
  },
  {
    fullName: "Mr. Terence Flatley",
    email: "Susana_Koelpin-Keeling@yahoo.com",
    jobArea: "Intranet",
    jobTitle: "Product Research Analyst",
    name: "Miller, Haley and Armstrong",
  },
  {
    fullName: "Terrence Kerluke",
    email: "Rafael_Halvorson57@gmail.com",
    jobArea: "Infrastructure",
    jobTitle: "Corporate Implementation Consultant",
    name: "Moore - Beahan",
  },
  {
    fullName: "Susan Beatty",
    email: "Greg_Mayer78@gmail.com",
    jobArea: "Identity",
    jobTitle: "Future Metrics Executive",
    name: "Crona - Simonis",
  },
  {
    fullName: "Bobbie Murphy",
    email: "Edgar.McGlynn85@hotmail.com",
    jobArea: "Program",
    jobTitle: "Legacy Data Developer",
    name: "Stracke, Abshire and Hand",
  },
  {
    fullName: "Janie Klein",
    email: "Geovanni_Jenkins@gmail.com",
    jobArea: "Paradigm",
    jobTitle: "Direct Web Planner",
    name: "Cummings - Wiza",
  },
  {
    fullName: "Sonya Donnelly",
    email: "Hertha.Heathcote87@gmail.com",
    jobArea: "Factors",
    jobTitle: "Human Accounts Technician",
    name: "Glover - Armstrong",
  },
  {
    fullName: "Danielle Lindgren",
    email: "Ryleigh73@yahoo.com",
    jobArea: "Program",
    jobTitle: "Central Division Consultant",
    name: "Marks Inc",
  },
  {
    fullName: "Rachael Nicolas",
    email: "Ollie98@gmail.com",
    jobArea: "Program",
    jobTitle: "Corporate Response Assistant",
    name: "Swift, Bins and Pfeffer",
  },
  {
    fullName: "Marshall Crooks",
    email: "Jamir84@yahoo.com",
    jobArea: "Intranet",
    jobTitle: "Internal Paradigm Liaison",
    name: "Lindgren, Vandervort and Konopelski",
  },
  {
    fullName: "Tiffany Kiehn",
    email: "Jayda20@hotmail.com",
    jobArea: "Optimization",
    jobTitle: "Future Branding Facilitator",
    name: "Johns Inc",
  },
  {
    fullName: "Fredrick Hamill",
    email: "Sigrid15@yahoo.com",
    jobArea: "Implementation",
    jobTitle: "Investor Quality Designer",
    name: "O'Keefe LLC",
  },
  {
    fullName: "Nettie Considine",
    email: "Amalia.Tromp31@hotmail.com",
    jobArea: "Tactics",
    jobTitle: "Regional Accountability Executive",
    name: "Herman, Lind and Abbott",
  },
  {
    fullName: "Dr. Julius Dooley",
    email: "Ruby_Boyle@gmail.com",
    jobArea: "Assurance",
    jobTitle: "Legacy Communications Administrator",
    name: "Purdy, Barton and McDermott",
  },
  {
    fullName: "Abel Gutmann",
    email: "Elza.Farrell77@yahoo.com",
    jobArea: "Data",
    jobTitle: "Central Division Orchestrator",
    name: "Bayer, Zboncak and King",
  },
  {
    fullName: "Lela Hessel V",
    email: "Kareem.Wolf@hotmail.com",
    jobArea: "Metrics",
    jobTitle: "Principal Infrastructure Technician",
    name: "Schowalter - Collins",
  },
  {
    fullName: "Marion Balistreri",
    email: "Carolanne31@hotmail.com",
    jobArea: "Identity",
    jobTitle: "Legacy Configuration Assistant",
    name: "Kshlerin, Pollich and Kuhlman",
  },
];

const EmployeeViewTable = ({ data }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Fullname</TableCell>
            <TableCell>Email address</TableCell>
            <TableCell>Job area</TableCell>
            <TableCell>Job title</TableCell>
            <TableCell>Company name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((employee) => (
            <TableRow key={employee.fullName}>
              <TableCell>{employee.fullName}</TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>{employee.jobArea}</TableCell>
              <TableCell>{employee.jobTitle}</TableCell>
              <TableCell>{employee.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// function App() {
//   return (
//     <div>
//       <Container>
//         <Typography color="#226ab0" gutterBottom variant="h5" align="center">
//           MUI School
//         </Typography>
//         <TableContainer></TableContainer>
//       </Container>
//     </div>
//   );
// }

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('default');
  const [exportOption, setExportOption] = useState('default');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleExportChange = (e) => {
    setExportOption(e.target.value);
  };

  // Implement filtering based on searchQuery and sorting based on sortOption

  return (
    <div className="container">
      <div className="search-container">
        <TextField
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
          InputProps={{
            endAdornment: <Icon />
          }}
        />
      </div>
      <div className="dropdowns-container">
        <Select value={sortOption} onChange={handleSortChange} endIcon={<Icon />}>
          <MenuItem value="default">Sort By</MenuItem>
          {/* Add sort options */}
        </Select>
        <Select value={exportOption} onChange={handleExportChange} endIcon={<Icon />}>
          <MenuItem value="default">Export As</MenuItem>
          {/* Add export options */}
        </Select>
      </div>
      <EmployeeViewTable data={employeeData} />
    </div>
  );
};

export default App;
