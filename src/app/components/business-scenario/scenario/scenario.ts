export class Scenario {
	
	id: number;
	type: string;
	screenshot: string;	//small image
	short: string;	//short title
	
	title?: string;
	slogan?: string;
	adv?: string;	//means imagesz

	details?: {
		'business-background': {
			title: string,
			adv: string,
			desc: [
				{
					p: string,
					details: string,
					aspects: string[]
				}
			]
		},
		'core-issues': {
			title: string,
			adv?: string,
			desc?: [
				{
					summary: string,
					details: string
				}
			]
		},
		solutions: {
			title: string,
			adv?: string,
			summary: string,
			desc?: [
				{
					summary: string,
					details: string
				}
			]
		},
	}
}
