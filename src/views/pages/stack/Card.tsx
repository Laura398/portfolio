import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';

export default function RowCard(props: { item: { title: string; logos: string[] } }) {
  return (
    <Card orientation="horizontal" variant="outlined" id="row-card" sx={{backgroundColor: "rgba(91, 128, 174, 0.471)"}}>
      <CardContent id={props.item.title.toLowerCase()} className="stack-logos">
        {props.item.logos.map((logo, index) => {
            return <img key={index} src={logo} alt={props.item.title} />;
        })}
      </CardContent>
      <CardOverflow
        variant="soft"
        color="primary"
        sx={{
          px: 0.2,
          writingMode: 'vertical-rl',
          justifyContent: 'center',
          fontSize: 'xs',
          fontWeight: 'xl',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          borderLeft: '1px solid',
          borderColor: 'divider',
        }}
      >
        {props.item.title.toUpperCase()}
      </CardOverflow>
    </Card>
  );
}