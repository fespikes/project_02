export class Scenario {
	
	id: number;
	type: string;
	screenshot: string;	//small image
	short: string;	//short title
	
	title?: string;
	slogan?: string;
	adv?: string;	//means imagesz
	advBgColor?: string;

	details?: [
		//'business-background': 
		{
			title?: string,
			adv?: string,
			desc?: [
				{
					p?: string,
					h4?: string,
					summary?: string,
					aspects?: string[]
				}
			]
		}
/*		,'core-issues': {
			title: string,
			adv?: string,
			desc?: [
				{
					p
					h4: string,
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
					h4: string,
					details: string
				}
			]
		},*/
	]
}
