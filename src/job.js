import React from 'react' 
import Typography from '@material-ui/core/Typography';


export default function Job(props) {
   return (
   <div className='single-job'>
       <div>{props.job.title}</div>
       <div>{props.job.company}</div>
   </div>
   )
}