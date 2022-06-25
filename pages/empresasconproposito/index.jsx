
import Head from 'next/head'
import Image from 'next/image'
import { LayoutMain } from '../../components/layouts/LayoutMain'



const Aliados= () => {
  return (
    <LayoutMain>

			<main className="main">

		
				<section className="background-section ">
					<div className="container ">
						<div className="row margin-bottom pt-12">
							<div className="col-12">
								<div className="heading heading--primary heading--center">
								<h2 className="heading__title no-margin-bottom"><span>Empresas con Propósito Filantrópicos</span></h2>
								</div>
							</div>
						</div>

						<div className="row offset-margin pb-12">
							<div className="col-lg-12">
								<div className="icon-item">
								<table id="Tabla_EmpresasConPropositos" className="table table-hover ">
                                   <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Fecha</th>
                                            
                                          </tr>
                                    </thead>
                                    <tbody>
									<tr>
										<td>Empresa 1</td>
										<td>2021-01-01</td>
									</tr>
									<tr>
										<td>Empresa 2</td>
										<td>2021-05-23</td>
									</tr>
									<tr>
										<td>Empresa 3</td>
										<td>2022-01-30</td>
									</tr>

                                   
                                    </tbody>
                                  </table>
								</div>
							</div>
					
							
							
						</div>
					</div>
				</section>

			</main>

    </LayoutMain>

  )
}

export default Aliados