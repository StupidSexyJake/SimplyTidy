// Material components
import Grid from '@material-ui/core/Grid'

export function InputField(props) {
    return (
        <Grid item md={4} sm={6} xs={12}>
            {props.children}
        </Grid>
    )
}