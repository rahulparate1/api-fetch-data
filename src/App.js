import React, { useState, useEffect } from "react"
import axios from "axios";
import { Paper, Card, Typography, Grid } from "@mui/material";

const App = () => {

  const [user, setUser] = useState([]);

  const fetchdata = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts")
    setUser(data)
  }

  useEffect(() => {
    fetchdata();
  }, [])


  return (
    <>
      {
        user.map((item) => {
          return (
            <>
              <Paper>
                <Grid container style={{display: "inline", justifyContent: "center", width:"100%"}}>
                  <Grid item  >
                    <Card style={{ border: "3px solid black", margin: "10px" }}>
                      <Typography>Title: {item.title}</Typography>
                    </Card>
                  </Grid>
                  <Grid item >
                    <Card style={{ border: "3px solid black", margin: "10px" }}>
                      <Typography>body: {item.body}</Typography>
                    </Card>
                  </Grid>
                </Grid>
              </Paper>
            </>
          )
        })
      }
    </>
  )
}

export default App;