import Box from '@cloudscape-design/components/box';

export default function EmptyState({ title, subtitle, actions }) {
  return (
    <Box textAlign="center" color="inherit">
      <Box variant="strong" textAlign="center" color="inherit">
        {title}
      </Box>
      <Box variant="p" padding={{bottom: 's'}} color="inherit">
        {subtitle}
      </Box>
      {actions}
    </Box>
  );
}