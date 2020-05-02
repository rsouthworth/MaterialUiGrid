import React from "react";
import ReactDOM from "react-dom";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import Paper from "@material-ui/core/Paper/Paper";
import ResponsiveDrawer from "./ResponsiveDrawer";
import Grid from "@material-ui/core/Grid/Grid";

function App() {
  return (
    <div className="App">
      <ResponsiveDrawer>
        <Grid container justify={"center"}>
          <Grid item xs={12} md={10} style={{ padding: "8px" }}>
            <Paper style={{ overflowX: "auto" }}>
              <Table style={{ minWidth: "340px" }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Column</TableCell>
                    <TableCell>Operating System</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>CPU Cores</TableCell>
                    <TableCell>Memory (MB)</TableCell>
                    <TableCell>IP Address</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Content</TableCell>
                    <TableCell>Content</TableCell>
                    <TableCell>Content</TableCell>
                    <TableCell>Content</TableCell>
                    <TableCell>Content</TableCell>
                    <TableCell>Content</TableCell>
                    <TableCell>Content</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Content</TableCell>
                    <TableCell>Content</TableCell>
                    <TableCell>Content</TableCell>
                    <TableCell>Content</TableCell>
                    <TableCell>Content</TableCell>
                    <TableCell>Content</TableCell>
                    <TableCell>Content</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </ResponsiveDrawer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
