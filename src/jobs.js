import React from 'react' 
import Typography from '@material-ui/core/Typography';
import Job from './job';


export default function Jobs(props) {
   return (
   <div className=''>
       <Typography variant='h1'>entry lvl jobs</Typography>
       {props.jobs.map(
           job => <Job job={job} />
       )}
   </div>
   )
}