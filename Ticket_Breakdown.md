# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### 1. Add custom id field to Agents table
- Create a new column in the Agents table to hold custom ids for each agent.
- Write a migration script to update the database schema.
- Update the Agents table to allow Facilities to save their own custom id for each agent they work with.
- Update the user interface to display the custom id field for each agent.
- Write unit tests to ensure the new custom id field is added and can be updated correctly.

### Acceptance criteria:
- A new custom id field is added to the Agents table.
- The custom id field is displayed in the user interface and can be updated by Facilities.
- The migration script runs without errors and updates the database schema.
- All unit tests pass.
#### Time effort estimate: 5-7 hours
<br>

### 2. Update getShiftsByFacility function to return custom agent ids
- Modify the getShiftsByFacility function to include the custom agent id in the metadata returned for each shift.
- Update the Shifts table to store the custom agent id for each shift.
- Write a migration script to update the database schema.
- Write integration tests to ensure the custom agent id is returned by the getShiftsByFacility function and stored in the Shifts table.
### Acceptance criteria:

- The getShiftsByFacility function includes the custom agent id in the metadata returned for each shift.
- The custom agent id is stored in the Shifts table.
- The migration script runs without errors and updates the database schema.
- All integration tests pass.
#### Effort estimate: 5-6 hours
<br>

### 3. Update generateReport function to use custom agent ids
- Modify the generateReport function to use the custom agent id instead of the internal database id when generating the report.
- Write unit tests to ensure the custom agent id is used correctly.
### Acceptance criteria:

- The generateReport function uses the custom agent id instead of the internal database id when generating the report.
- All unit tests pass.
#### Effort estimate: 3-4 hours
<br>

### 4. Add ability to filter by custom agent id
- Add a new filter option in the user interface to allow Facilities to filter shifts by custom agent id.
- Modify the getShiftsByFacility function to filter shifts by custom agent id if the filter option is selected.
- Write integration tests to ensure the filter option works correctly.
### Acceptance criteria:
- A new filter option is added to the user interface to filter shifts by custom agent id.
- The getShiftsByFacility function filters shifts by custom agent id if the filter option is selected.
- All integration tests pass.
#### Effort estimate: 5-6 hours
