import type { ButtonProps as MUIButtonProps } from '@mui/material/Button'
import Button from '@mui/material/Button'

interface Props extends Omit<MUIButtonProps, 'children'> {
	/** Texto exibido no botão */
	label: string
	/** Quando true deixa o botão elíptico/oval */
	elliptic?: boolean
}

export default function MuiButton({ label, elliptic = false, sx, ...props }: Props) {
	return (
		<Button
					sx={{
						borderRadius: elliptic ? '999px' : 8,
						textTransform: 'none',
						paddingLeft: 16,
						paddingRight: 16,
						...(sx ? (sx as unknown as object) : {}),
					}}
			{...props}
		>
			{label}
		</Button>
	)
}

